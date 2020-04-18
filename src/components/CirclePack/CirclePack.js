import React, { useEffect, useRef } from "react";
import './CirclePack.css';
import data from './data.js' 
import {
  select,
  pack,
  hierarchy,
  scaleLinear,
  event,
  interpolateHcl,
  interpolateZoom
} from "d3";

function CirclePack() {
  const [width, height] = [600, 600]

  const packer = data => pack()
    .size([width, height])
    .padding(3)
  (hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value))

  const svgRef = useRef();
  const wrapperRef = useRef();
  const color = scaleLinear()
    .domain([0, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(interpolateHcl)

useEffect(() => {
    const svg = select(svgRef.current)
    .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
    .style("margin", "0 -14px")
    .attr("width", width)
    .attr("height", height)
    .on("click", () => zoom(root));

  const root = packer(data);
  let focus = root;
  let view;

  const node = svg.append("g")
    .selectAll("circle")
    .data(root.descendants().slice(1))
    .join("circle")
      .attr("fill", d => d.data.color)
      .attr("pointer-events", d => !d.children ? "none" : null)
      .on("mouseover", function() { select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { select(this).attr("stroke", null); })
      .on("click", d => focus !== d && (zoom(d), event.stopPropagation()));
      

  const label = svg.append("g")
      .style("font", "20px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(root.descendants())
    .join("text")
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .text(d => d.data.name);

  const zoomTo = v => {
    const k = width / v[2];

    view = v;

    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", d => d.r * k);
  }

  function zoom(d) {
    const focus0 = focus;

    focus = d;

    const transition = svg.transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

    zoomTo([root.x, root.y, root.r * 2])
})

  return (
    <React.Fragment>
      <div ref={wrapperRef}>
        <svg ref={svgRef}>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default CirclePack;