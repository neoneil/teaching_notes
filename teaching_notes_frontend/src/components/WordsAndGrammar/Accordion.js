import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <pre className="accordion-content">{content}</pre>}
    </div>
  );
};

export default Accordion;