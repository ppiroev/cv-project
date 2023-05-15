/* eslint-disable react/prop-types */
import { useState } from "react";
import uniqid from "uniqid";

export default function EmployementDetails({ editMode }) {
  const [employement, setEmployement] = useState({
    id: uniqid(),
    name: "",
    position: "",
    period: "",
    description: "",
  });

  const [employementList, setEmployementList] = useState([]);

  function handleClick() {
    setEmployementList([...employementList, employement]);
    setEmployement({
      id: uniqid(),
      name: "",
      position: "",
      period: "",
      description: "",
    });
  }

  function handleDelete(id) {
    const updatedEmployementList = employementList.filter(
      (employement) => employement.id != id
    );
    setEmployementList(updatedEmployementList);
  }

  return (
    <div className="employement-details">
      <h2>Employement History</h2>
      <hr />
      <ul>
        {employementList.map((employement) => {
          return (
            <li className="employer-details" key={employement.id}>
              <p className="employer-name">{employement.name}</p>
              <p className="employement-position">{employement.position}</p>
              <p className="employement-period">{employement.period}</p>
              <p className="employement-description">
                {employement.description}
              </p>
              <button
                style={editMode}
                onClick={() => handleDelete(employement.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div className="employement-input">
        <input
          type="text"
          placeholder="Employer Name"
          value={employement.name}
          style={editMode}
          onChange={(e) =>
            setEmployement({ ...employement, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Position"
          value={employement.position}
          style={editMode}
          onChange={(e) =>
            setEmployement({ ...employement, position: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Employement Period (i.e - 2010/2012)"
          value={employement.period}
          style={editMode}
          onChange={(e) =>
            setEmployement({ ...employement, period: e.target.value })
          }
        />
        <textarea
          placeholder="Describe your day to day responsibilities.."
          value={employement.description}
          cols="30"
          rows="10"
          style={editMode}
          onChange={(e) =>
            setEmployement({ ...employement, description: e.target.value })
          }
        ></textarea>
        <button style={editMode} onClick={() => handleClick()}>
          Add
        </button>
      </div>
    </div>
  );
}
