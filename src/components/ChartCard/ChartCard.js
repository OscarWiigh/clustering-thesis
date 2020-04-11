import React from 'react';
import Card from '../Card/Card.js'
import StackedBarChart from "../StackedBarChart/StackedBarChart.js";
import './ChartCard.css';

function ChartCard({ data, keys, colors }) {
  
  return (
    <React.Fragment>
      <div className="box">
      <StackedBarChart data={data} keys={keys} colors={colors} />
      <Card/>
      </div>
    </React.Fragment>
  );
}

export default ChartCard;
