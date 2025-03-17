import React, { useState, useEffect } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    email: "",
    phone: "",
    availability: { days: "", slots: "" },
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/doctors/viewdoctors");
        if (!response.ok) throw new Error("Failed to fetch doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/doctors", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newDoctor),
//       });
//       if (!response.ok) throw new Error("Failed to add doctor");
//       const addedDoctor = await response.json();
//       setDoctors([...doctors, addedDoctor]);
//       setNewDoctor({ name: "", specialization: "", email: "", phone: "", availability: { days: "", slots: "" } });
//       setShowForm(false);
//     } catch (error) {
//       console.error("Error adding doctor:", error);
//     }
//   };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800">Doctors List</h2>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Add Doctor"}
      </button>
      {showForm && (
        <form className="mt-4" onSubmit={handleAddDoctor}>
          <input
            type="text"
            placeholder="Doctor Name"
            value={newDoctor.name}
            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Specialization"
            value={newDoctor.specialization}
            onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newDoctor.email}
            onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newDoctor.phone}
            onChange={(e) => setNewDoctor({ ...newDoctor, phone: e.target.value })}
            required
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Available Days (e.g., Monday, Wednesday)"
            value={newDoctor.availability.days}
            onChange={(e) => setNewDoctor({ ...newDoctor, availability: { ...newDoctor.availability, days: e.target.value } })}
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            placeholder="Available Slots (e.g., 10AM-12PM)"
            value={newDoctor.availability.slots}
            onChange={(e) => setNewDoctor({ ...newDoctor, availability: { ...newDoctor.availability, slots: e.target.value } })}
            className="border p-2 w-full mb-2"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
            Save Doctor
          </button>
        </form>
      )}
      <table className="w-full mt-4 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-blue-200 text-blue-800">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Specialization</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone</th>
            <th className="p-3 border">Availability</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <tr key={doctor._id} className="text-center border">
                <td className="p-3 border">{doctor.name}</td>
                <td className="p-3 border">{doctor.specialization}</td>
                <td className="p-3 border">{doctor.email}</td>
                <td className="p-3 border">{doctor.phone}</td>
                <td className="p-3 border">
                  Days: {doctor.availability.days?.join(", ") || "N/A"} <br />
                  Slots: {doctor.availability.slots?.join(", ") || "N/A"}
                </td>
                <td className="p-3 border">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    View Profile
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center text-gray-500">
                No doctors available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
