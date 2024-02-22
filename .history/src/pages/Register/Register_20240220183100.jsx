import React, { useState } from 'react'
import '../Register/Register.scss'
import axios from 'axios'

const Register = () => {

    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""

    })
    const handleChange=(e)=>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value }))


    }
    const handleClick=async (e)=>{
        e.preventDefault()
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/api/auth/register",inputs)

        }catch(err){
            setErr(err.response.data)
        }


    }

  return (
    <div className='register'>
        <div className='left-panel'>
        <div className='container'>
                <h1>Register</h1>
                <input type="text" placeholder='Enter Name' onChange={handleChange}/>
                <input type="text" placeholder='Enter Email' onChange={handleChange}/>
                <input type="text" placeholder='Create Username' onChange={handleChange}/>
                <input type="password" placeholder='Create Password' onChange={handleChange}/>
                <input type="password" placeholder='Verify Password' onChange={handleChange}/>
                <button onClick={handleClick}>Register</button>
                
        </div>
        <div className='info'>
            <p>Forgot Password?</p>
            <p style={{"margin-top":"8%"}}>Already have an account? Login</p>
        </div>
        </div>
        <div className='right-panel'>
            <h2>This is sample bg </h2>
            
        </div>
    </div>

  )
}

export default Register