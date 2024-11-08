import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [serverError, setServerError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
      
        setMessage("");
        setServerError(false);

   
        if (!name || !email || !password) {
            setMessage("All fields are required.");
            return;
        }

        axios.post('https://hostel-backend-e7gv.onrender.com/register', { name, email, password })
            .then(result => {
                if (result.data.message === "Email already exists") {
                    setMessage("Email already exists.");
                } else {
                    setMessage("Registration successful! Check your email for confirmation.");
                    navigate('/login');
                }
            })
            .catch(err => {
                console.error(err);
                setServerError(true); 
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "turquoise" }}>
            <div className='p-3 rounded w-60' style={{ backgroundColor: "white" }}>
                <center>
                    <h2 style={{ textShadow: "2px 2px 4px turquoise", fontFamily: "san serif" }}>Welcome To Aditya</h2>
                    <img src='2.png' className='img-fluid' style={{ height: "60px", width: "100px" }} alt="Logo" />
                </center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Username</strong></label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            name="name"
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            name="email"
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            name="password"
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                </form>
                
                {/* Display messages based on form submission result */}
            <center>   {message && <p className="mt-3" style={{color:"red"}}>{message}</p>}
                {serverError && <p className="text-danger mt-3">Unable to reach servers.<br/>Please try again later.</p>}
                
                <p>Already have an account?</p></center> 
                <Link to="/login">
                    <button className='btn btn-default border w-100 bg-light rounded-0'>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
