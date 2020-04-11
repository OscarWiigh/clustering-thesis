import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card.js'
import StackedBarChart from "./components/StackedBarChart/StackedBarChart.js";

function App() {
  const [data, setData] = useState([
  {
    "🥑": 10,
    "🍌": 40,
    "🍆": 30
  }
]);

const allKeys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "green",
  "🍌": "orange",
  "🍆": "purple"
};
  return (
    <div className="App">
      <header className="App-header">
      <StackedBarChart data={data} keys={allKeys} colors={colors} />
      <Card/>
      <button onClick={() => setData([
  {
    "🥑": 40,
    "🍌": 70,
    "🍆": 5
  }
])}>Update data</button>
      </header>
    </div>
  );
}

export default App;
