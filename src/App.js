import React, { useState } from 'react';
import './App.css';
import BoxViz from './components/BoxViz/BoxViz.js'
import CircleViz from './components/CircleViz/CircleViz.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'


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

const inputquestion = "What is your favorite animal?"

const allKeys = ["sales", "marketing", "development"];

const colors = {
  "sales": "green",
  "marketing": "orange",
  "development": "purple"
};

const HomePage = () => <BoxViz question={inputquestion} data={data} updatedata={updatedata} keys={allKeys} colors={colors} setData={setData}/>
const CirclePage = () => <CircleViz question={"What is a circle?"}/>

const BaseLayout = () => (
      <div className="App">
        <Route path="/" exact component={HomePage}/>
        <Route path="/circle" exact component={CirclePage}/>
        <Link to='/'>Home</Link>
        <Link to='/circle'>Circle</Link>
      </div>
  );

  return (
    <BrowserRouter><BaseLayout/></BrowserRouter>
  );
}

export default App;
