import React from 'react';
import './CircleViz.css';
import CirclePack from '../CirclePack/CirclePack.js'

function CircleViz({question, keys, colors}) {
  return (
    <React.Fragment>
      <h1 className="question">{question}</h1>
      <CirclePack/>
      <div className="controls top">{keys.map((item,index) => <div className="filter"><div className="dot" style={{backgroundColor: [colors[item]]}}></div><p className="paragraph">{item}</p></div>)}</div>
    </React.Fragment>
  );
}

export default CircleViz;