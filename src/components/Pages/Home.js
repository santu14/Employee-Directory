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
    setSearch(event.target.value, ()=>{filterResults()} );
    
  };

  const filterResults = () => {
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
  };

  const renderResults = () => {
    if (searchResults < 1 && search === "") {
      return results.map((employee) => (
        <TableItem
          key={employee.id.value}
          image={employee.picture.thumbnail}
          name={employee.name.first + " " + employee.name.last}
          phone={employee.cell}
          email={employee.email}
        />
      ));
    } else {
      
      return searchResults.map((employee) => (
        <TableItem
          key={employee.id.value}
          image={employee.picture.thumbnail}
          name={employee.name.first + " " + employee.name.last}
          phone={employee.cell}
          email={employee.email}
        />
      ));
    }
  };

  console.log(results);
  console.log(searchResults);


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
        <Table child={renderResults()} />
      </Container>
    </>
  );
}

export default Home;
