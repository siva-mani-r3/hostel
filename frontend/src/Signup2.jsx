// import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import {useNavigate} from 'react-router-dom'
// const Signup1 = () => {
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
//             <center><h2 style={{"fontFamily":"san serif","text-shadow": "2px 2px 4px turquoise"}}>Register</h2></center>
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
//                     <p>Already have account</p>
//                     <Link to="/login"><button className='btn btn-deafault border w-100 bg-light rounded-0 text-decoration-none'>Login</button></Link>
//         </div>
//     </div>
//   );
// }
// export default Signup1
