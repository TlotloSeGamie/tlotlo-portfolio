import React from 'react';
import './Assessments.css';

const assessmentsData = [
  {
    title: 'UI Challenge',
    date: '2024-05-06',
    score: '85%',
    notes: 'Above average performance.',
  },
  {
    title: 'JavaScript Assessment',
    date: '2024-01-10',
    score: '90%',
    notes: 'Excellent understanding of the basics.',
  },
  {
    title: 'React Native',
    date: '2024-12-06',
    score: '41%',
    notes: 'Completed an external course.',
  },
];

const Assessments = () => {
  return (
    <section id="assessments" className="assessments">
      <h2>Assessments</h2>
      <table className="assessments-table">
        <thead>
          <tr>
            <th>Assessment</th>
            <th>Date Completed</th>
            <th>Grade/Score</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {assessmentsData.map((assessment, index) => (
            <tr key={index}>
              <td>{assessment.title}</td>
              <td>{assessment.date}</td>
              <td>{assessment.score}</td>
              <td>{assessment.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Assessments;
