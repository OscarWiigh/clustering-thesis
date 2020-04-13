import React, { useEffect, useRef } from "react";
import {
  select,
  stack,
  max,
  sum,
  scaleLinear,
  stackOrderAscending,
  easeBounce
} from "d3";

/**
 * Component that renders a StackedBarChart
 */

function StackedBarChart({ data, keys, colors }) {
  const svgRef = useRef();
  const wrapperRef = useRef();


  // will be called initially and on every data change
  useEffect(() => {
    const width = 400;
    const svg = select(svgRef.current)
    .attr("width", 402)
    .attr("height", 30);

    // stacks / layers
    const stackGenerator = stack()
      .keys(keys)
      .order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, layer => sum(layer, sequence => sequence[1]))
    ];

    // scales

    const xScale = scaleLinear()
      .domain(extent) // 0-total value
      .range([0, width]);

    const percentageScale = scaleLinear()
    .domain(extent)
    .range([0,100])

    var toggle = true;

    // rendering
    var bars = svg
      .selectAll(".layer")
      .data(layers)
      .join(
        enter => enter.append("g"),
        update => update.attr("class", "updated"),
        exit => exit.remove())
      .attr("class", "layer")

      // Adding bars
      bars
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("y", 0)
      .attr("width", sequence => xScale(sequence[1]-sequence[0]))
      .transition()
      .ease(easeBounce,1)
      .duration(500)
      .attr("x", sequence => xScale(sequence[0]))
      .attr("height", "30px");

      // Adding text
      bars
      .selectAll("text")
      .data(layer => layer)
      .join("text")
      .attr("class", "percentage")
      .text(sequence => percentageScale(sequence[1]-sequence[0]).toFixed(1) + "%")
      .attr("fill", "white")
      .attr("font-size", "15px")
      .attr("font-weight", "bold")
      .attr("y", 16)
      .attr("x", sequence => xScale(sequence[0]))

      // Toggling percentages or numbers
      bars
      .selectAll("rect").on("click", function() {
        if (toggle){bars.select("text").text(sequence => sequence[0][1]-sequence[0][0])}
        else {bars.select("text").text(sequence => percentageScale(sequence[0][1]-sequence[0][0]).toFixed(1) + "%")}
        toggle = !toggle;
 });
  }, [colors, data, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef}>
        <svg ref={svgRef}>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChart;
