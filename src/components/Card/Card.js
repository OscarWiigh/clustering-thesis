import React from 'react';
import './Card.css';

function Card({ answer }) {
  return (
    <React.Fragment>
      <div className="cardbox">
      <p>{answer}</p>
      </div>
    </React.Fragment>
  );
}

export default Card;