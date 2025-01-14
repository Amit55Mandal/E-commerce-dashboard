import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate()
    const logout=()=>{
       localStorage.clear();
        navigate('/signup');
    }
    return(
        <div>
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1whjaVB1bYDVy2lI55vCIuxqjA_4YMtkVA&s" alt="Description of image" />
            { auth ?
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">update Product</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link onClick={logout} to='/signup'>logout({JSON.parse(auth).name})</Link></li>
                </ul>:
               <ul className="nav-ul nav-align"> <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
}
        </div>
    )
}
export default Nav;