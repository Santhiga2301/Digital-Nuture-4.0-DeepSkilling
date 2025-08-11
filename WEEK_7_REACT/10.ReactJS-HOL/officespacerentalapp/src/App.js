import React from "react";

function App() {
  // Object of a single office
  const office = {
    name: "Prime Business Hub",
    rent: 55000,
    address: "123, MG Road, Bengaluru",
    image: "https://via.placeholder.com/300x200?text=Office+Space"
  };

  // List of office spaces
  const officeList = [
    { name: "Tech Park One", rent: 75000, address: "Whitefield, Bengaluru" },
    { name: "Startup Plaza", rent: 45000, address: "Koramangala, Bengaluru" },
    { name: "Global Tower", rent: 60000, address: "Indiranagar, Bengaluru" }
  ];

  // Function to set rent color based on value
  const rentStyle = (rent) => ({
    color: rent < 60000 ? "red" : "green",
    fontWeight: "bold"
  });

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Office image */}
      <img
        src={office.image}
        alt="Office Space"
        style={{ width: "300px", borderRadius: "10px" }}
      />

      {/* Single Office Details */}
      <h2>{office.name}</h2>
      <p style={rentStyle(office.rent)}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>

      <hr />

      {/* List of Office Spaces */}
      <h2>Available Office Spaces</h2>
      <ul>
        {officeList.map((o, index) => (
          <li key={index}>
            <strong>{o.name}</strong> —{" "}
            <span style={rentStyle(o.rent)}>₹{o.rent}</span> — {o.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
