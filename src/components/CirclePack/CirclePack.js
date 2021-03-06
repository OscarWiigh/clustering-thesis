import React, { useEffect, useRef } from "react";
import './CirclePack.css';
import {
  select,
  pack,
  hierarchy,
  event,
  interpolateZoom
} from "d3";

function CirclePack({data}) {
  const [width, height] = [550, 550]

  const packer = data => pack()
    .size([width, height])
    .padding(3)
  (hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value))

  const svgRef = useRef();
  const wrapperRef = useRef();

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
    .join("circle",
    update => update.attr("class", "updated"))
      .attr("fill", d => d.data.color)
      .attr("pointer-events", d => !d.children ? "none" : null)
      .attr("cursor", "pointer")
      .on("mouseover", function() { select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { select(this).attr("stroke", null); })
      .on("click", d => focus !== d && (zoom(d), event.stopPropagation()));
      

  const label = svg.append("g")
      .style("font", "40px bold")
      .style("fill", "white")
      .style("font-family", "Helvetica")
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
      <div className="circlewrapper" ref={wrapperRef}>
        <svg ref={svgRef}>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default CirclePack;