/* eslint-disable react/prop-types */
import { useState } from "react";
import Details from "./Details";
import Skills from "./Skills";

export default function PersonalDetails({ viewMode, editMode }) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [photo, setPhoto] = useState("./src/default-avatar.png");

  function handleChange(e) {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="personal-details">
        <div className="profile-picture">
          <img src={photo} alt="default-avatar" />
          <label
            style={editMode}
            htmlFor="photo-upload"
            className="custom-photo-upload"
          >
            {" "}
            Upload Photo
            <input
              type="file"
              id="photo-upload"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="fName-lName">
        <p style={viewMode}>{details.firstName}</p>
        <input
        placeholder="First Name"
          type="text"
          style={editMode}
          value={details.firstName}
          onChange={(e) =>
            setDetails({ ...details, firstName: e.target.value })
          }
        />
        <p style={viewMode}>{details.lastName}</p>
        <input
        placeholder="Last Name"
          type="text"
          style={editMode}
          value={details.lastName}
          onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
        />
      </div>
      <hr />
      <Details
        viewMode={viewMode}
        editMode={editMode}
        details={details}
        setDetails={setDetails}
        country={details.country}
        city={details.city}
        address={details.address}
        phoneNumber={details.phoneNumber}
        email={details.email}
      />
      <hr />
      <Skills editMode={editMode} />
    </div>
  );
}
