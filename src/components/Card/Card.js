import React from 'react';
import './Card.css';

function Card({ category, answer }) {
  return (
    <React.Fragment>
      <div className="cardbox">
      <p>{answer}</p>
      <span role="img" aria-label="emoji">{category}</span>
      </div>
    </React.Fragment>
  );
}

export default Card;