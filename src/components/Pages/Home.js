import React, { useState, useEffect } from "react";
import Hero from "../Hero";
import Container from "../Container";
import Table from "../Table";
import API from "../../utils/API";
import TableItem from "../TableItem";
import SearchBar from "../SearchBar";

function Home() {
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [caret, setCaret] = useState("up");

  useEffect(() => {
    API.getAll()
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
    
  }, []);

  useEffect(() => {
    setSearchResults(
      results.filter((employee) => {
        let name = `${employee.name.first} ${employee.name.last}`
        return (
          name.toLowerCase().includes(search) ||
          employee.email.toLowerCase().includes(search) ||
          employee.cell.includes(search)


        );
      })
    );
  }, [results, search])

  const handleInputChange = (event) => {
    setSearch(event.target.value );
    
  };
  const handleOnClick = event => {
    if (caret === "up") {
      setCaret("down");
    } else {
      setCaret("up");
      sortAcending();
    }
  }
  const sortAcending = () =>{
    if (searchResults < 1 && search === "") {
      setResults(results.sort())
     } else {
      setSearchResults(searchResults.sort())
    }
  }
  const sortDecending = () =>{
    
  }

  const renderResults = () => {
    if (searchResults < 1 && search === "") {
      return results.map((employee) => (
        <TableItem
          key={employee.id.value}
          image={employee.picture.medium}
          name={employee.name.first + " " + employee.name.last}
          phone={employee.cell}
          email={employee.email}
        />
      ));
    } else {
      
      return searchResults.map((employee) => (
        <TableItem
          key={employee.id.value}
          image={employee.picture.medium}
          name={employee.name.first + " " + employee.name.last}
          phone={employee.cell}
          email={employee.email}
        />
      ));
    }
  };

 


  return (
    <>
      <Hero>
        <h1>Employee Directory</h1>
      </Hero>
      <SearchBar 
        search={search} 
        handleInputChange={handleInputChange} 
      />
      <Container>
        <Table caretDir={caret} handleOnClick={handleOnClick}>
          {renderResults()}
        </Table>
      </Container>
    </>
  );
}

export default Home;
