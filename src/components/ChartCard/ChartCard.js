import React from 'react';
import Card from '../Card/Card.js'
import StackedBarChart from "../StackedBarChart/StackedBarChart.js";
import './ChartCard.css';

function ChartCard({ category, answer, data, keys, colors }) {
  console.log(category)
  return (
    <React.Fragment>
      <div className="box">
      <StackedBarChart data={data} keys={keys} colors={colors} />
      <Card category={category} answer={answer}/>
      </div>
    </React.Fragment>
  );
}

export default ChartCard;
