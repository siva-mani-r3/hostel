import React from 'react'
import { useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const Updateuser3 = () => {
    const {id}=useParams()
    const[name,setName]=useState()
    const[rollno,setroll]=useState()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('https://hostel-backend-e7gv.onrender.com/users3/getUser3/'+id)
        .then(result=>{console.log(result)
            setName(result.data.name)
            setroll(result.data.rollno)
        }
    )
        .catch(err=>console.log(err)) 
    },[])
    const Update=(e)=>{
        e.preventDefault();
        axios.put('https://hostel-backend-e7gv.onrender.com/update3/'+id,{name,rollno})
        .then(result=>{console.log(result)
            navigate('/users3')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="container-fluid" style={{"marginTop":"90px"}} >
    <div className="">
    <h2 style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><b>Update Student Details</b></h2>
        <form onSubmit={Update}>
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>Name</h3></label>
                <input type='text'  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter-name' className='form-control'/>
            </div>
            <div className='mb-2'>
            <label style={{ "fontFamily": "sans-serif", "marginTop": "10px","marginLeft":"5px",
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}><h3>RollNo</h3></label>
                <input type='text' onChange={(e)=>setroll(e.target.value)} value={rollno} placeholder='Enter-Rollno' className='form-control'/>
            </div>
            <div className='mb-2'>
                <button className='btn btn-success'>Update</button>
            </div>
        </form>
    </div>
    </div>
  )
}
export default Updateuser3
