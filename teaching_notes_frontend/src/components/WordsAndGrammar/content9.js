import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content9 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
    const noun = 'testing a noun';
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>名词</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <pre className="accordion-content">{noun}</pre>}
    </div>
  );
};

export default Content9;