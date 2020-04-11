import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card.js'
import ChartCard from './components/ChartCard/ChartCard.js'
import StackedBarChart from "./components/StackedBarChart/StackedBarChart.js";

function App() {
  const [data, setData] = useState([
  {
    "sales": 10,
    "marketing": 40,
    "development": 30
  }
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
      <ChartCard data={data} keys={allKeys} colors={colors}/>
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
