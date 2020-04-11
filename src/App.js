import React from 'react';
import './App.css';
import Card from './components/Card/Card.js'
import StackedBarChart from "./components/StackedBarChart/StackedBarChart.js";

const data = [
  {
    year: 1980,
    "🥑": 10,
    "🍌": 40,
    "🍆": 30
  }
];

const allKeys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "green",
  "🍌": "orange",
  "🍆": "purple"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StackedBarChart data={data} keys={allKeys} colors={colors} />
      <Card/>
      </header>
    </div>
  );
}

export default App;
