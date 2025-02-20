import React, { useState } from 'react';
import './WordsAndGrammar.scss'
const Content8 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
    const dingyucongju = `1`;
    const zhuangyucongju = `2`;
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>定语从句</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <pre className="accordion-content">{dingyucongju}</pre>}
      <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <div>状语从句</div>
        <div>{isActive2 ? '-' : '+'}</div>
      </div>
      {isActive2 && <pre className="accordion-content">{zhuangyucongju}</pre>}
    </div>
  );
};

export default Content8;