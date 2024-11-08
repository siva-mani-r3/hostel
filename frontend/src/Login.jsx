import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serverError, setServerError] = useState("");
    const [inputError, setInputError] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

      
        setServerError("");
        setInputError("");


        if (!email || !password) {
            setInputError("Please fill input fields");
            return;
        }

      
        axios.post('https://hostel-backend-e7gv.onrender.com/login', { email, password })
            .then(result => {
                if (result.data === "success") {
                    navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22'); 
                } else {
                    alert("Incorrect login details");  
                }
            })
            .catch(err => {
                if (err.response === undefined) {
                    setServerError("Unable to reach the server.\nPlease try again later.");
                }
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: "turquoise" }}>
            <div className='p-3 rounded w-60' style={{ backgroundColor: "white" }}>
                <center>
                    <img src='2.png' className='img-fluid' style={{ height: "60px", width: "100px" }} alt="Logo" />
                </center>
                <center><h2 style={{ fontFamily: "san serif" }}>Login</h2></center>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            autoComplete='off'
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
                            autoComplete='off'
                            name="password"
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                </form>

                
                {inputError && <p className="text-danger mt-3">{inputError}</p>}

                {serverError && (
    <div className="text-danger mt-3">
        <p>Unable to reach our servers. <br/>Please try again later.</p>
       
    </div>
)}

                <p className="mt-3">New user? Register below</p>
                <Link to="/">
                    <button className='btn btn-default border w-100 bg-light rounded-0'>Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
