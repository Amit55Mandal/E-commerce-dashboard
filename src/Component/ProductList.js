import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Product=()=>{
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts=async()=>{
        let result=await fetch('http://localhost:5000/products',{
        headers:{
            authorization:JSON.parse(localStorage.getItem('token'))
        }
        });
        
        result=await result.json();
        setProduct(result);
    }
    const deleteProduct=async (id)=>{
       let result=await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
       });
       result=await result.json();
       if(result){
        getProducts();
       }
    }
    const searchHandle=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`http://localhost:5000/search/${key}`);
            result=await result.json();
            if(result){
                setProduct(result)
            }
        }else{
            getProducts();
        }
    }
    return(
        <div className="product-list">
        <h3>Product List</h3>
        <input className="search-product-box" onChange={searchHandle} type="text" placeholder="Search Product"></input>
        <ul>
            <li>S.no</li>
            <li>Name</li>
            <li>Price</li>
            <li>category</li>
            <li>company</li>
            <li>Operatoin</li>

        </ul>
        {
           product.length>0? product.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                   { <Link to={"/update/"+item._id}>update</Link>}
                    </li>
                </ul>
            ):
            <h2>No result found</h2>
        }
        </div>
    )
}
export default Product;