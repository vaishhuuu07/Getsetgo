import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';

const Loginform =() =>  {
    const  [LoginData, setLoginData] = useState({
        email: '',
        password: '',

    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Send the form data to your server
        axios.post('http://localhost:5000/Login', LoginData)
          .then((response) => {
            console.log(response.data);
            alert("Successful Login"+response.data.name)
            // Handle success, e.g., show a success message to the user
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle error, e.g., show an error message to the user
          });
    };
//function Login(){
    return(
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className='bg-white  p-3 rounded w-25'>
                    <h2>Sign-In</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0' name="email"onChange ={handleChange} value={LoginData.Email}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' className='form-control rounded-0' name="password" onChange={handleChange} value={LoginData.Password}/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0' type ='submit' onClick={handleSubmit}>Log in</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Create Account
                        </Link>
                </form>
            </div>
        </div>
    )
}
export default Loginform