import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientDashboard = ({ jobs, setJobs }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      ...formData,
      status: "pending", // Default status for new jobs
    };
    setJobs([...jobs, formData]);
    setFormData({ title: "", description: "", location: "" });
    alert("Job posted successfully!");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h2>Welcome, Client!</h2>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>

      <h3>Your Posted Jobs:</h3>
      <ul>
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <strong>{job.title}</strong> - {job.location}
            <br />
            {job.description}
            <br />
            <span className={`status ${job.status}`}>{job.status}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ClientDashboard;
