import React, { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { title, description, location, price: Number(price) };

    try {
      await axios.post("http://localhost:5000/jobs", jobData);
      alert("Job Posted Successfully!");
      setTitle("");
      setDescription("");
      setLocation("");
      setPrice("");
    } catch (error) {
      alert("Error Posting Job");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobForm;
