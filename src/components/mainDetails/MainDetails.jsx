/* eslint-disable react/prop-types */
import EmployementDetails from "./EmployementDetails";
import AboutMe from "./AboutMe";
import Education from "./Education";

export default function MainDetails({ viewMode, editMode }) {
  return (
    <div className="main-details" id="printMe">
        <AboutMe viewMode={viewMode} editMode={editMode} />
        <EmployementDetails editMode={editMode} />
        <Education editMode={editMode}/>
    </div>
  );
}
