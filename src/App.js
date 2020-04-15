import React, { useState } from 'react';
import './App.css';
import ChartCard from './components/ChartCard/ChartCard.js'

function App() {
  const [data, setData] = useState([[{"answer": "Dog"},{"category": "🥑"},[{
    "sales": 20,
    "marketing": 40,
    "development": 30
  }]],[{"answer": "Cat"},{"category": "🥑"},[{
    "sales": 70,
    "marketing": 30,
    "development": 60
  }]],[{"answer": "Fish"},{"category": "🔥"},[{
    "sales": 10,
    "marketing": 18,
    "development": 20
  }]],[{"answer": "Guinea Pig"},{"category": "🔥"},[{
    "sales": 29,
    "marketing": 39,
    "development": 20
  }]],[{"answer": "Parrot"},{"category": "🍑"},[{
    "sales": 60,
    "marketing": 65,
    "development": 22
  }]],[{"answer": "Turtle"},{"category": "🔥"},[{
    "sales": 16,
    "marketing": 22,
    "development": 23
  }]]
]);

const updatedata = ([[{"answer": "Dog"},{"category": "🥑"},[{
    "sales": 13,
    "marketing": 47,
    "development": 19
  }]],[{"answer": "Cat"},{"category": "🥑"},[{
    "sales": 13,
    "marketing": 12,
    "development": 30
  }]],[{"answer": "Fish"},{"category": "🔥"},[{
    "sales": 7,
    "marketing": 22,
    "development": 7
  }]],[{"answer": "Guinea Pig"},{"category": "🔥"},[{
    "sales": 20,
    "marketing": 23,
    "development": 27
  }]],[{"answer": "Parrot"},{"category": "🍑"},[{
    "sales": 60,
    "marketing": 40,
    "development": 30
  }]],[{"answer": "Turtle"},{"category": "🔥"},[{
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
      <h1 className="question">What is your favorite animal?</h1>
      <header className="App-header">
      {data.map((item,index) => <ChartCard category={item[1].category} key={index} answer={item[0].answer} data={item[2]} keys={allKeys} colors={colors}/>)}
      </header>
      <div><button onClick={() => setData(data.filter(item => item[1].category === "🔥"))}><span role="img" aria-label="emoji">🔥</span></button>
      <button onClick={() => setData(data.filter(item => item[1].category === "🥑"))}><span role="img" aria-label="emoji">🥑</span></button>
      <button onClick={() => setData(data.filter(item => item[1].category === "🍑"))}><span role="img" aria-label="emoji">🍑</span></button>
      <button onClick={() => setData(updatedata)}>All</button>
      <button onClick={() => setData(updatedata)}>Update data</button></div>
    </div>
  );
}

export default App;
