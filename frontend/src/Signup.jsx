// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import {useNavigate} from 'react-router-dom'
// const Signup = () => {
//     const [name,setname]=useState()
//     const [email,setemail]=useState()
//     const [password,setpassword]=useState()
// const navigate=useNavigate()
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:3002/register',{name,email,password})
//     .then(result=>{console.log(result)
//     navigate('/login')
//     })
// .catch(err=> console.log(err))
//     }
//   return (
//     <div className='d-flex justify-content-center align-items-center  vh-100' style={{"backgroundColor":"turquoise"}}>
//         <div className=' p-3 rounded w-60' style={{"backgroundColor":"white"}}>
//         <center>
//             <h2 style={{ "text-shadow": "2px 2px 4px turquoise","fontFamily":"san serif"}}>Welcome To Aditya</h2>
//           <img src='2.png' className='img-fluid' style={{"height":"60px","width":"100px"}} /></center>
//             {/* <center><h2 style={{"fontFamily":"san serif","text-shadow": "2px 2px 4px turquoise"}}>Register</h2></center> */}
//             <form onSubmit={handleSubmit} >
//                 <div className='mb-3'>
//                     <label htmlFor='email'>
//                         <strong style={{"fontFamily":"san serif"}}>Username</strong>
//                     </label>
//                     <input
//                     type='text'
//                     placeholder='Enter-username..'
//                     autoComplete='off'
//                     name="email"
//                     className='form-control rounded-0'
//                     onChange={(e)=>setname(e.target.value)}/>
//                 </div> 
//                 <div className='mb-3'>
//                     <label htmlFor='email'>
//                         <strong style={{"fontFamily":"san serif"}}>Email</strong>
//                     </label>
//                     <input
//                     type='email'
//                     placeholder='Enter-email..'
//                     autoComplete='off'
//                     name="email"
//                     className='form-control rounded-0'
//                     onChange={(e)=>setemail(e.target.value)}/>
//                     </div>
//                     <div className='mb-3'>
//                     <label htmlFor='email'>
//                         <strong style={{"fontFamily":"san serif"}}>Password</strong>
//                     </label>
//                     <input
//                     type='password'
//                     placeholder='Enter-password..'
//                     autoComplete='off'
//                     name="password"
//                     className='form-control rounded-0'
//                     onChange={(e)=>setpassword(e.target.value)}/>
//                     </div>
//                     <button type='submit' className='btn btn-success w-100 rounded-0'>
//                         Register
//                     </button>
//                     </form>
//                     <p style={{marginTop:"5px"}}>Already have account ? </p>
              
//                     <Link to="/login"><button className='btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none'><b> Login</b></button></Link>
//                     {/* <Link to="/login234" ><button  style={{"marginTop":"7px"}}className='btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none'> <b>Student Login</b></button></Link> */}
                  
//         </div>
//     </div>
//   );
// }
// export default Signup
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!name || !email || !password) {
            setMessage("All fields are required.");
            return;
        }

        axios.post('https://hostel-backend-e7gv.onrender.com/register', { name, email, password })
            .then(result => {
                setMessage("Registration successful! Check your email for confirmation.");
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Redirects to login after 2 seconds
            })
            .catch(err => {
                console.log(err);
                setMessage("Registration failed. Please try again.");
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
                <p className="mt-3">{message}</p>
                <p>Already have an account?</p>
                <Link to="/login">
                    <button className='btn btn-default border w-100 bg-light rounded-0'>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
