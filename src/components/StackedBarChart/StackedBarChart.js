import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  stack,
  max,
  sum,
  scaleLinear,
  stackOrderAscending
} from "d3";
import useResizeObserver from "../../useResizeObserver.js";

/**
 * Component that renders a StackedBarChart
 */

function StackedBarChart({ data, keys, colors }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

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
      .domain(extent) // 0-80
      .range([0, width]);

    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .attr("adw", layer => console.log(layer))
      .join("rect")
      .attr("y", 0)
      .attr("width", sequence => xScale(sequence[1]-sequence[0]))
      .attr("x", sequence => xScale(sequence[0]))
      .attr("height", "20px");
  }, [colors, data, dimensions, keys]);

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
