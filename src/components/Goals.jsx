import React from 'react';
import './Goals.css';

const goalsData = {
  shortTerm: [
    'Secure a job in web development.',
    'Build 2-3 more portfolio projects.',
  ],
  longTerm: [
    'Become a full-stack developer.',
    'Contribute to meaningful open-source projects.',
  ],
};

const Goals = () => {
  return (
    <section id="goals" className="goals">
      <h2>Post-Program Goals</h2>
      <div className="goals-section">
        <h3>Short-Term Goals</h3>
        <ul>
          {goalsData.shortTerm.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
      <div className="goals-section">
        <h3>Long-Term Goals</h3>
        <ul>
          {goalsData.longTerm.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Goals;
