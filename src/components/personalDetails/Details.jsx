/* eslint-disable react/prop-types */
export default function Details({
  country,
  city,
  address,
  phoneNumber,
  email,
  setDetails,
  details,
  viewMode,
  editMode,
}) {
  return (
    <div className="details-section">
      <h2>Details</h2>
      <ul className="details">
        <li style={viewMode}>{country}</li>
        <input
        placeholder="Country"
          type="text"
          style={editMode}
          value={details.country}
          onChange={(e) => setDetails({ ...details, country: e.target.value })}
        />
        <li style={viewMode}>{city}</li>
        <input
        placeholder="City"
          type="text"
          style={editMode}
          value={details.city}
          onChange={(e) => setDetails({ ...details, city: e.target.value })}
        />
        <li style={viewMode}>{address}</li>
        <input
        placeholder="Street Address"
          type="text"
          style={editMode}
          value={details.address}
          onChange={(e) => setDetails({ ...details, address: e.target.value })}
        />
        <li style={viewMode}>{phoneNumber}</li>
        <input
        placeholder="Phone Number"
          type="text"
          style={editMode}
          value={details.phoneNumber}
          onChange={(e) =>
            setDetails({ ...details, phoneNumber: e.target.value })
          }
        />
        <li style={viewMode}>{email}</li>
        <input
        placeholder="Email Address"
          type="email"
          style={editMode}
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
      </ul>
    </div>
  );
}
