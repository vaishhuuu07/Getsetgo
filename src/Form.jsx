import React from "react";
import "../src/App.css"
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import video2 from '../src/Assets/video (2).mp4'
import axios from 'axios';
import {Box,Slider} from '@mui/material';



const TravelForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: 1,
    additionalInfo: '',
    price: 25
  });
  

  const marks = [
    {
      value: 0,
      label: '0-1000',
    },
    {
      value: 25,
      label: '1000-4000',
    },
    {
      value: 75,
      label: '4000-10000',
    },
    {
      value: 100,
      label: '>10000',
    },
  ];
  const navigate = useNavigate()
  

  // Handler function to update the state when the slider value changes
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    // Send the form data to your server
    axios.post('http://localhost:5000/submitTravelForm', formData)
      .then((response) => {
        console.log(response.data);
        navigate('/hotels')
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        navigate('/hotels')
        // Handle error, e.g., show an error message to the user
      });
  };
  return (
    <div className="travel-form">
    
     {/* <div className="videoDiv">
        <video className="video-background" loop autoPlay muted>
          <source src={video2} type="video/mp4" />
        </video>
  </div> */}
     
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
      
        <label htmlFor="departureDate">Departure Date:
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
        </label>
        <label htmlFor="returnDate">Return Date:
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
        </label>
        <label>
          Number of Travellers:
          <input
            type="text"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            required
           /> 
        </label>

        <label>
          Price(In ₹):
          <Box sx={{ width: 300,marginLeft:'20px' }}>
          <Slider
        aria-label="Custom marks"
        name="price"
        value={formData.price}
        onChange={handleChange}
        
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
          />
        </Box>
        </label>
          
        <label>
        Additional information:
          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            required
          />        

        </label>
       
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
          </div>
  );
};

export default TravelForm;

