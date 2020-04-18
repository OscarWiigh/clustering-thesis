import React from 'react';
import './Card.css';

function Card({ category, answer }) {
  return (
    <React.Fragment>
      <div className="cardbox">
      <p className="boxtext">{answer}</p>
      <span className="boxtext" role="img" aria-label="emoji">{category}</span>
      </div>
    </React.Fragment>
  );
}

export default Card;