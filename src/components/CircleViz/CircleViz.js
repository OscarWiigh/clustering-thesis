import React from 'react';
import './CircleViz.css';
import CirclePack from '../CirclePack/CirclePack.js'

function CircleViz({ question}) {
  return (
    <React.Fragment>
      <h1 className="question">{question}</h1>
      <CirclePack/>
    </React.Fragment>
  );
}

export default CircleViz;