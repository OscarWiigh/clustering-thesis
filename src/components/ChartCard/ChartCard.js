import React from 'react';
import Card from '../Card/Card.js'
import StackedBarChart from "../StackedBarChart/StackedBarChart.js";
import './ChartCard.css';

function ChartCard({ answer, data, keys, colors }) {
  return (
    <React.Fragment>
      <div className="box">
      <StackedBarChart data={data} keys={keys} colors={colors} />
      <Card answer={answer}/>
      </div>
    </React.Fragment>
  );
}

export default ChartCard;
