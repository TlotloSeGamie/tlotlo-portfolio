import React from "react";
import "./Skills.css";

const skillsData = [
  { skill: "HTML", level: "Intermediate", notes: "Used in multiple projects." },
  { skill: "CSS", level: "Advanced", notes: "Styled responsive layouts." },
  {
    skill: "JavaScript",
    level: "Intermediate",
    notes: "Built dynamic web applications.",
  },
  {
    skill: "React Native",
    level: "Intermediate",
    notes: "Developed a to-do list app.",
  },
  {
    skill: "TypeScript",
    level: "Beginner",
    notes: "Applied in API integrations.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills Matrix</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Proficiency Level</th>
            <th>Notes/Examples of Use</th>
          </tr>
        </thead>
        <tbody>
          {skillsData.map((skill, index) => (
            <tr key={index}>
              <td data-label="Skill">{skill.skill}</td>
              <td data-label="Proficiency Level">{skill.level}</td>
              <td data-label="Notes/Examples of Use">{skill.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
