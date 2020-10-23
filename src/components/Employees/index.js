import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";



const Employees = () =>{
  const [results, setResults] = useState()
  
//     // When the component mounts, get a list of all available base breeds and update this.state.breeds
    useEffect(() => {
      API.getAll()
        .then( res =>
            setResults(res.data)
            
        )
        .catch(err => console.log(err));
    },[]);

    
    
    
    return (
      <h1>Hello</h1>
      
      );
    
  }
export default Employees;
