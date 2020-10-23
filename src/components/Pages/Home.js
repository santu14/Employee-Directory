import React, { useState, useEffect } from "react";

import Hero from '../Hero'
import Container from '../Container'
import Table from '../Table'
import Employees from '../Employees'
import API from "../../utils/API";
import TableItem from "../TableItem";




function Home() {
    const [results, setResults] = useState([])
  

    useEffect(() => {
      API.getAll()
        .then( res =>
            
            setResults(res.data.results)

            
        )
        .catch(err => console.log(err));
    },[]);

    
    
    console.log(results)
  return (
  <>
    <Hero>
      <h1>Employee Directory</h1>
    </Hero>
    <Container>
        <Table
        
           child=
           {results.map(employee => (
                
                <TableItem
                    key={employee.id.value}
                    image={employee.picture.thumbnail}
                    name={employee.name.first + " " + employee.name.last}
                    phone={employee.cell}
                    email={employee.email}
                />
            ))}
        />
        <Employees/>
    </Container>
  </>
);
    
}

export default Home;