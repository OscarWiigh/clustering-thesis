import React, { useState } from 'react';
import './App.css';
import ChartCard from './components/ChartCard/ChartCard.js'

function App() {
  const [data, setData] = useState([[{"answer": "Hello there"},{"category": "Bug"},[{
    "sales": 10,
    "marketing": 40,
    "development": 30
  }]],[{"answer": "Hello you"},{"category": "Bug"},[{
    "sales": 70,
    "marketing": 5,
    "development": 60
  }]],[{"answer": "Hello world"},{"category": "Feature"},[{
    "sales": 2,
    "marketing": 18,
    "development": 20
  }]]
]);

const updatedata = ([[{"answer": "Hello there"},{"category": "Bug"},[{
    "sales": 13,
    "marketing": 47,
    "development": 19
  }]],[{"answer": "Hello you"},{"category": "Bug"},[{
    "sales": 13,
    "marketing": 12,
    "development": 30
  }]],[{"answer": "Hello world"},{"category": "Feature"},[{
    "sales": 7,
    "marketing": 22,
    "development": 16
  }]]
])

const allKeys = ["sales", "marketing", "development"];

const colors = {
  "sales": "green",
  "marketing": "orange",
  "development": "purple"
};
console.log(data.map(item => item[1]))
  return (
    <div className="App">
      <header className="App-header">
      {data.map((item,index) => <ChartCard key={index} answer={item[0].answer} data={item[2]} keys={allKeys} colors={colors}/>)}
      <button onClick={() => setData(data.filter(item => item[1].category === "Bug"))}>Filter stuff</button>
      <button onClick={() => setData(updatedata)}>Update data</button>
      </header>
    </div>
  );
}

export default App;
