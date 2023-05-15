import "./App.css";
import PersonalDetails from "./components/personalDetails/PersonalDetails";
import MainDetails from "./components/mainDetails/MainDetails";
import Controls from "./components/controls/Controls";
import { useState } from "react";

export default function App() {
  const [editing, setEditing] = useState(true);

  function changeMode() {
    if (editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  let viewMode = {};
  let editMode = {};
  if (!editing) {
    editMode.display = "none";
    viewMode.display = "";
  } else {
    editMode.display = "";
    viewMode.display = "none";
  }

  return (
    <div className="content">
      <PersonalDetails
        viewMode={viewMode}
        editMode={editMode}
      />
        <MainDetails 
        viewMode={viewMode}
        editMode={editMode} />
      <div className="controls" id="control-menu">
        <Controls editing={editing} handleClick={changeMode} />
      </div>
    </div>
  );
}
