import React from "react";
import "../src/App.css"
import { useState } from "react";
import video2 from '../src/Assets/video (2).mp4'
import axios from 'axios';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: 1,
    additionalInfo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to your server
    axios.post('http://localhost:5000/submit-form', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
      });
  };
  return (
    <div className="travel-form">
    
      <div className="videoDiv">
        <video className="video-background" loop autoPlay muted>
          <source src={video2} type="video/mp4" />
        </video>
        </div>
     
      <h1>APPLY!</h1>
      <form onSubmit={handleSubmit}>
      
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />             
          
        </label>
       
        <button type="submit">Submit</button>
      </form>
          </div>
  );
};

export default TravelForm;

