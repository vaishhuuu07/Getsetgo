import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';

const SignupForm = () => {
  const [SignupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to your server
    axios.post('http://localhost:5000/Signup', SignupData)
      .then((response) => {
        console.log(response.data);
        alert("Successful Signup")
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
      });
    };

//function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white  p-3 rounded w-25'>
      <h2>Sign-Up</h2>
    <form action="">
        <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder='Enter Name' className='form-control rounded-0' name="name"onChange={handleChange} value={SignupData.name}/>
        </div>
        <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' className='form-control rounded-0' name="email"onChange={handleChange} value={SignupData.email}/>
        </div>
        <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' className='form-control rounded-0' name="password"onChange={handleChange} value={SignupData.password}/>
        </div>
        <button className='btn btn-success w-100 rounded-0' type ='submit' onClick={handleSubmit}>Sign up</button>
        <p>You agree to our terms and policies</p>
        <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
    </form>
</div>
</div>
  )
}

export default SignupForm