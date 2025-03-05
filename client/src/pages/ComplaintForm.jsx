import React, { useState, useEffect } from "react";
import "../styles/ComplaintForm.module.css";

const ComplaintForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Harassment");
  const [location, setLocation] = useState("");
  const [complaints, setComplaints] = useState([]);

  // Load complaints from localStorage on component mount
  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name ||!email||  !location) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    // Fetch coordinates for the location
    let coordinates = await getCoordinates(location);
    if (coordinates.error) {
      alert("⚠️ Unable to find location. Try a different place.");
      return;
    }

    // Find the nearest police station
    let policeStation = await findNearestPoliceStation(coordinates.lat, coordinates.lon);

    // Create a new complaint object
    const newComplaint = {
      name,
      email,
      category,
      location,
      timestamp: new Date().toLocaleString(),
      policeStation,
    };

    // Update complaints list and localStorage
    const updatedComplaints = [...complaints, newComplaint];
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));

    // Reset form fields
    setName("");
    setEmail("");
    setLocation("");

    // Show success message
    alert("✅ Complaint submitted successfully!");
  };

  // Fetch coordinates using OpenStreetMap API
  const getCoordinates = async (location) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json`
      );
      const data = await response.json();

      if (data.length === 0) {
        return { error: "Location not found." };
      }
      return { lat: data[0].lat, lon: data[0].lon };
    } catch (error) {
      console.error("⚠️ Error fetching coordinates:", error);
      return { error: "API error" };
    }
  };

  // Find the nearest police station using Overpass API
  const findNearestPoliceStation = async (lat, lon) => {
    try {
      const overpassQuery = `[out:json];node["amenity"="police"](around:10000,${lat},${lon});out;`;
      const response = await fetch(
        `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`
      );
      const data = await response.json();

      if (data.elements.length > 0) {
        return data.elements
          .slice(0, 3) // Limit to 3 nearest police stations
          .map((el) => {
            let name = el.tags.name || "Unnamed Police Station";
            let mapLink = `https://www.google.com/maps/search/?api=1&query=${el.lat},${el.lon}`;
            return`${name} (<a href="${mapLink}" target="_blank">View on Map</a>)`;
          })
          .join("<br>");
      } else {
        return "No nearby police station found.";
      }
    } catch (error) {
      console.error("⚠ Error fetching police station:", error);
      return "Error fetching police station.";
    }
  };

  // Delete a complaint
  const deleteComplaint = (index) => {
    const updatedComplaints = complaints.filter((_, i) => i !== index);
    setComplaints(updatedComplaints);
    localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
  };

  return (
    <div className="container">
      <h2>📢 Report a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="👩 Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="📧 Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Harassment</option>
          <option>Cyber Harassment</option>
          <option>Domestic Violence</option>
          <option>Public Harassment</option>
          <option>Stalking</option>
          <option>Human Trafficking</option>
        </select>
        <input
          type="text"
          value={location}
          placeholder="📍 Enter Your Location"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">🚀 Submit Complaint</button>
      </form>

      <h2>📜 Submitted Complaints</h2>
      <ul>
        {complaints.map((complaint, index) => (
          <li key={index}>
            <strong>{complaint.name}</strong> - {complaint.category} <br />
            📍 {complaint.location} | 📅 {complaint.timestamp} <br />
            🚔 Nearest Police Station: <span dangerouslySetInnerHTML={{ __html: complaint.policeStation }}></span> <br />
            <button className="delete-btn" onClick={() => deleteComplaint(index)}>
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintForm;