import "./app.css"
import { useState } from "react";
import video2 from '../src/Assets/video (2).mp4'


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
    // You can perform form submission actions here, such as sending data to a server.
    console.log(formData);
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
        <label>
          Departure Date:
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Return Date:
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Travelers:
          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Additional Information:
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
          </div>
  );
};

export default TravelForm;
