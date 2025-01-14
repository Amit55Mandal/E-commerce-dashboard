import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const Login=()=>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })
    const handleClick= async ()=>{
        console.warn("email,password",email,password)
    let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
    console.warn(result);
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth));
        navigate("/");
    }
    else{
        alert("please enter correct detail");
    }
    }
    return(
        <div>
           <input type="text" className="inputBox" placeholder="Enter email"
           onChange={(e)=>setEmail(e.target.value)} value={email}></input>
           <input type="password" className="inputBox" placeholder="Enter password"
           onChange={(e)=>setPassword(e.target.value)} value={password}></input>
           <button type="button" onClick={handleClick} className="app-button">Login</button>
        </div>
    )
}
export default Login;