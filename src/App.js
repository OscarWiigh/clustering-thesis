import React, { useState } from 'react';
import './App.css';
import ChartCard from './components/ChartCard/ChartCard.js'

function App() {
  const [data, setData] = useState([[{
    "sales": 10,
    "marketing": 40,
    "development": 30
  }],[{
    "sales": 70,
    "marketing": 5,
    "development": 60
  }],[{
    "sales": 2,
    "marketing": 18,
    "development": 20
  }]
]);

const allKeys = ["sales", "marketing", "development"];

const colors = {
  "sales": "green",
  "marketing": "orange",
  "development": "purple"
};
  return (
    <div className="App">
      <header className="App-header">
      {data.map((item,index) => <ChartCard key={index} data={item} keys={allKeys} colors={colors}/>)}
      <button onClick={() => setData([
  {
    "sales": 40,
    "marketing": 70,
    "development": 5
  }
])}>Update data</button>
      </header>
    </div>
  );
}

export default App;
