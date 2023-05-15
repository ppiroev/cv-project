/* eslint-disable react/prop-types */
import { useState } from "react";
import uniqid from "uniqid";

export default function Education({ editMode }) {
  const [education, setEducation] = useState({
    id: uniqid(),
    school: "",
    degree: "",
    period: "",
    city: "",
  });

  const [educationList, setEducationList] = useState([]);

  function handleClick() {
    setEducationList([...educationList, education]);
    setEducation({
      id: uniqid(),
      school: "",
      degree: "",
      period: "",
      city: "",
    });
  }

  function handleDelete(id) {
    const updatedEducationList = educationList.filter(
      (education) => education.id != id
    );
    setEducationList(updatedEducationList);
  }

  return (
    <div className="education">
      <h2>Education</h2>
      <hr />
      <ul>
        {educationList.map((education) => {
          return (
            <li className="education-details" key={education.id}>
              <p className="education-school">{education.school}</p>
              <p className="education-degree">{education.degree}</p>
              <p className="education-period">{education.period}</p>
              <p className="education-city">{education.city}</p>
              <button
                style={editMode}
                onClick={() => handleDelete(education.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div className="education-input">
        <input
          placeholder="School Name"
          style={editMode}
          type="text"
          value={education.school}
          onChange={(e) =>
            setEducation({ ...education, school: e.target.value })
          }
        />
        <input
          placeholder="Degree"
          style={editMode}
          type="text"
          value={education.degree}
          onChange={(e) =>
            setEducation({ ...education, degree: e.target.value })
          }
        />
        <input
          placeholder="Period (i.e - 2010/2012)"
          style={editMode}
          type="text"
          value={education.period}
          onChange={(e) =>
            setEducation({ ...education, period: e.target.value })
          }
        />
        <input
          placeholder="City"
          style={editMode}
          type="text"
          value={education.city}
          onChange={(e) => setEducation({ ...education, city: e.target.value })}
        />
        <button style={editMode} onClick={() => handleClick()}>
          Add
        </button>
      </div>
    </div>
  );
}
