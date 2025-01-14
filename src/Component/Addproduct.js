import React, { useState } from "react";
const AddProduct=()=>{
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const [error,setError]=useState(false);
    
    const addProduct= async ()=>{
        console.warn(!name);
        if(!name|| !price || !category || !company){
            setError(true)
            return false;
        }
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result= await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result= await result.json();
        console.warn(result);
        
    }
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter produce name" className="inputBox"
            value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            {error && !name &&<span className="invalid-input">Enter valid name</span>}
            <input type="text" placeholder="Enter product price" className="inputBox"
            value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
             {error && !price &&<span className="invalid-input">Enter valid product price</span>}
            <input type="text" placeholder="Enter product category" className="inputBox"
            value={category} onChange={(e)=>{setCategory(e.target.value)}}></input>
             {error && !category &&<span className="invalid-input">Enter valid product category</span>}
            <input type="text" placeholder="Enter product company" className="inputBox"
            value={company} onChange={(e)=>{setCompany(e.target.value)}}></input>
              {error && !company &&<span className="invalid-input">Enter valid product company</span>}
            <button onClick={addProduct} className="appButton">Add product</button>
        </div>
    )
}
export default AddProduct;