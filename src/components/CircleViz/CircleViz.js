import React from 'react';
import './CircleViz.css';

function CircleViz({ question}) {
  return (
    <React.Fragment>
      <h1 className="question">{question}</h1>
    </React.Fragment>
  );
}

export default CircleViz;