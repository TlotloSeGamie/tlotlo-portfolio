import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Feedback.css';

const feedbackData = {
  facilitatorFeedback: [
    'Demonstrated strong proficiency in front-end development.',
    'Consistently delivered high-quality work on time.',
  ],
  selfReflection: `
    During my time at CodeTribe Academy, I have grown significantly as a developer. 
    I’ve gained hands-on experience in building responsive web applications and collaborating in teams.
    My strengths lie in problem-solving and front-end development, but I aim to improve my backend skills 
    and learn more about DevOps practices.
  `,
};

const Feedback = () => {
  return (
    <section id="feedback" className="feedback">
      <h2>Feedback and Reflections</h2>
      <div className="feedback-section">
        <h3>Facilitator Feedback</h3>
        <div className="soon-loader">
          <h4><b><i>Comming soon....</i></b></h4>
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      </div>
      <div className="reflection-section">
        <h3>Self-Reflection</h3>
        <p>{feedbackData.selfReflection}</p>
      </div>
    </section>
  );
};

export default Feedback;
