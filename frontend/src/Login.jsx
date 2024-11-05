import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/login',{email,password})
    .then(result=>{console.log(result)
        if (result.data==="success"){
            navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22')
            email=setemail;
        }
        else{
            document.getElementById("detail").style.display="block"
            alert("Details are not correct")
            navigate('/login')
        }
    })
.catch(err=> console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center  vh-100' style={{"backgroundColor":"turquoise"}}>
     
    <div className=' p-3 rounded w-60' style={{"backgroundColor":"white"}}>
    <center> <img src='2.png' className='img-fluid' style={{"height":"60px","width":"100px"}} /></center>
            <center><h2 style={{"fontFamily":"san serif"}}>Login</h2></center>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong style={{"fontFamily":"san serif"}}>Email</strong>
                    </label>
                    <input
                    type='email'
                    placeholder='Enter-email..'
                    autoComplete='off'
                    name="email"
                    className='form-control rounded-0'
                    onChange={(e)=>setemail(e.target.value)}/>
                    </div>

                    <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong style={{"fontFamily":"san serif"}}>Password</strong>
                    </label>
                    <input
                    type='password'
                    placeholder='Enter-password..'
                    autoComplete='off'
                    name="password"
                    className='form-control rounded-0'
                    onChange={(e)=>setpassword(e.target.value)}/>
                    <p style={{color:"red", display:'none', marginTop:"5px"}} id='detail'>Details are not correct ...</p>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Login
                    </button>
                    </form>
                    <p style={{marginTop:"5px"}}>New user ? Register-below</p>
              <Link to="/"><button className='btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none'>Register</button></Link>
        </div>
    </div>
  );
}

export default Login
