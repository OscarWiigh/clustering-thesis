import React from 'react';
import './CircleViz.css';
import CirclePack from '../CirclePack/CirclePack.js'

function CircleViz({setDatafile, data2, data, question, keys, colors}) {
  return (
    <React.Fragment>
      <h1 className="question">{question}</h1>
      <CirclePack data={data}/>
      <div className="controls top">{keys.map((item,index) => <div key={index} className="filter"><div className="dot" style={{backgroundColor: [colors[item]]}}></div><p className="paragraph">{item}</p></div>)}</div>
      <button onClick={() => setDatafile(data2)}>Update data</button>
    </React.Fragment>
  );
}

export default CircleViz;