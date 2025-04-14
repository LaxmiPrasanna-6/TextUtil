import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="accordion-section">
        <div className="accordion-item">
          <button onClick={() => toggleAccordion(1)} className="accordion-title">
            What is TextUtils?
          </button>
          <div className={`accordion-content ${openIndex === 1 ? 'show' : ''}`}>
            <p>
              <strong>TextUtils is a versatile text utility app</strong> that empowers users to efficiently manipulate their text...
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleAccordion(2)} className="accordion-title">
            Features of TextUtils
          </button>
          <div className={`accordion-content ${openIndex === 2 ? 'show' : ''}`}>
            <ul>
              <li>Convert text to UPPERCASE</li>
              <li>Convert text to lowercase</li>
              <li>Remove extra spaces</li>
              <li>Copy text to clipboard</li>
              <li>Live preview and word/character count</li>
            </ul>
          </div>
        </div>

        <div className="accordion-item">
          <button onClick={() => toggleAccordion(3)} className="accordion-title">
            Why Choose TextUtils?
          </button>
          <div className={`accordion-content ${openIndex === 3 ? 'show' : ''}`}>
            <p>
              TextUtils is fast, simple, and free to use. It works in any modern browser...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
