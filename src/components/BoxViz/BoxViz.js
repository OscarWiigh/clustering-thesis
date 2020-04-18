import React from 'react';
import ChartCard from '../ChartCard/ChartCard.js'
import './BoxViz.css';

function BoxViz({ question, data, updatedata, keys, colors, setData }) {
  return (
    <React.Fragment>
      <h1 className="question">{question}</h1>
      <div className="main-wrapper">
      <div className="card-wrapper">
      {data.map((item,index) => <ChartCard category={item[1].category} key={index} answer={item[0].answer} data={item[2]} keys={keys} colors={colors}/>)}
      </div>
      </div>
      <div className="controls">
      {keys.map((item,index) => <div className="filter"><div className="dot" style={{backgroundColor: [colors[item]]}}></div><p className="paragraph">{item}</p></div>)}
      </div>
      <div><button onClick={() => setData(data.filter(item => item[1].category === "🔥"))}><span role="img" aria-label="emoji">🔥</span></button>
      <button onClick={() => setData(data.filter(item => item[1].category === "🥑"))}><span role="img" aria-label="emoji">🥑</span></button>
      <button onClick={() => setData(data.filter(item => item[1].category === "🍑"))}><span role="img" aria-label="emoji">🍑</span></button>
      <button onClick={() => setData(updatedata)}>All</button>
      <button onClick={() => setData(updatedata)}>Update data</button></div>
    </React.Fragment>
  );
}

export default BoxViz;