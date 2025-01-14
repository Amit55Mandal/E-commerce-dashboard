import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import './compStyle.css';
const SignUp=()=>{
    const[name,setName]=useState("");
    const[password,setpassword]=useState("");
    const[email,setemail]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })
    const collectdata=async()=>{
        console.warn(name,email,password);
        let result=await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result=await result.json();
        console.warn(result);
       
        
        localStorage.setItem("user",JSON.stringify(result.result))
        localStorage.setItem("token",JSON.stringify(result.auth))
        navigate('/');
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"></input>
            <input className="inputBox" type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter email"></input>
            <input className="inputBox" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter password"></input>
            <button onClick={collectdata} className="app-button" type="button">SignUp</button>
        </div>
    )
}
export default SignUp;