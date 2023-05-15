/* eslint-disable react/prop-types */
import { useState } from "react";
import uniqid from "uniqid";

export default function Skills({ editMode }) {
  const [skill, setSkill] = useState({
    text: " ",
    id: uniqid(),
  });
  const [skillsList, setSkillsList] = useState([]);

  function handleChange(e) {
    setSkill({
      text: e.target.value,
      id: uniqid(),
    });
  }

  function handleClick() {
    setSkillsList([...skillsList, skill]);
    setSkill({
      text: " ",
      id: uniqid(),
    });
  }

  function handleDelete(id) {
    const updatedSkillsList = skillsList.filter((skill) => skill.id != id);
    setSkillsList(updatedSkillsList);
  }

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <ul className="skills">
        {skillsList.map((skill) => {
          return (
            <li className="skill-item" key={skill.id}>
              <div>{skill.text}</div>
              <button style={editMode} onClick={() => handleDelete(skill.id)}>
                <i className="fi fi-rr-cross-circle"></i>
              </button>
            </li>
          );
        })}
        <li>
          <div className="skills" id="input-skills" style={editMode}>
            <input
              type="text"
              value={skill.text}
              onChange={(e) => handleChange(e)}
            />
            <button onClick={() => handleClick()}>
              <i className="fi fi-rr-add"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
