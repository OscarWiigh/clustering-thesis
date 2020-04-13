import React, { useState } from 'react';
import './App.css';
import ChartCard from './components/ChartCard/ChartCard.js'

function App() {
  const [data, setData] = useState([[{"answer": "Hello there"},{"category": "Bug"},[{
    "sales": 20,
    "marketing": 40,
    "development": 30
  }]],[{"answer": "Hello you"},{"category": "Bug"},[{
    "sales": 70,
    "marketing": 30,
    "development": 60
  }]],[{"answer": "Hello world"},{"category": "Feature"},[{
    "sales": 10,
    "marketing": 18,
    "development": 20
  }]],[{"answer": "Hello there"},{"category": "Bug"},[{
    "sales": 29,
    "marketing": 39,
    "development": 20
  }]],[{"answer": "Hello you"},{"category": "Bug"},[{
    "sales": 60,
    "marketing": 65,
    "development": 22
  }]],[{"answer": "Hello world"},{"category": "Feature"},[{
    "sales": 16,
    "marketing": 22,
    "development": 23
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
    "development": 7
  }]],[{"answer": "Hello there"},{"category": "Bug"},[{
    "sales": 20,
    "marketing": 23,
    "development": 27
  }]],[{"answer": "Hello you"},{"category": "Bug"},[{
    "sales": 60,
    "marketing": 40,
    "development": 30
  }]],[{"answer": "Hello world"},{"category": "Feature"},[{
    "sales": 20,
    "marketing": 19,
    "development": 20
  }]]
])

const allKeys = ["sales", "marketing", "development"];

const colors = {
  "sales": "green",
  "marketing": "orange",
  "development": "purple"
};
  return (
    <div className="App">
      <h1>What did you think of this feature?</h1>
      <header className="App-header">
      {data.map((item,index) => <ChartCard key={index} answer={item[0].answer} data={item[2]} keys={allKeys} colors={colors}/>)}
      </header>
      <div><button onClick={() => setData(data.filter(item => item[1].category === "Bug"))}>Filter stuff</button>
      <button onClick={() => setData(updatedata)}>Update data</button></div>
    </div>
  );
}

export default App;
