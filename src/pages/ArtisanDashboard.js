import React from "react";
import { useNavigate } from "react-router-dom";

const ArtisanDashboard = ({ jobs, setJobs }) => {
  const navigate = useNavigate();

  const handleAcceptJob = (index) => {
    const updatedJobs = jobs.map((job, i) =>
      i === index ? { ...job, status: "accepted" } : job
    );
    setJobs(updatedJobs);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="artisan-dashboard">
      {/* Sidebar Profile */}
      <div className="sidebar">
        <h2>Artisan Profile</h2>
        <p>
          <strong>Name:</strong> John Artisan
        </p>
        <p>
          <strong>Location:</strong> Lagos, Nigeria
        </p>
        <p>
          <strong>Skills:</strong> Plumbing, Welding, Carpentry
        </p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Available Jobs</h2>

        {jobs.length === 0 ? (
          <p>No jobs available right now.</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="job-card">
              <strong>{job.title}</strong>
              <br />
              {job.description}
              <br />
              <em>{job.location}</em>
              <br />
              <span className={`status ${job.status}`}>{job.status}</span>
              <br />

              {job.status === "pending" && (
                <button onClick={() => handleAcceptJob(index)}>
                  Accept Job
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ArtisanDashboard;
