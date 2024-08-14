import React from "react";
import { useState } from "react";

import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
function Signup()
{
    const navigate=useNavigate()

    const [name,setName]=useState()
    const [email,setEmail]=useState()

    const [password,setPassword]=useState()
    const handleSubmit=(e) =>
        {
        e.preventDefault()
        
        axios.post('https://login-signup-backend-q9qf.onrender.com',
            {name,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        navigate("/Login")
        alert(`Registerd Successfully`);
    }

    return( <div className="d-flex justify-content-center align-items-center
        vw-100">

                <div className="bg-white p-3 rounded w-50  ">
                <h2 style={{color:"black"}}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" required placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" 
                        onChange={(e)=>setName(e.target.value)}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" required placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" 
                                                onChange={(e)=>setEmail(e.target.value)}/>
                                                

                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" required placeholder="Enter password" name="password" className="form-control rounded-0" onChange={(e)=>setPassword(e.target.value)}/>

                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already have a Account</p>
               
                 </div>
            </div>
);
}
export default Signup;