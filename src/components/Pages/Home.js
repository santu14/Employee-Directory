import React, { useState, useEffect } from "react";
import Container from "../Container";
import Table from "../Table";
import API from "../../utils/API";
import TableItem from "../TableItem";
import SearchBar from "../SearchBar";

function Home() {
  // Set up our stateful components
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [caret, setCaret] = useState("up");

 // Retreive our employee list from our api
  useEffect(() => {
    API.getAll()
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  // Filter through our results for those that match our search component
  useEffect(() => {
    setSearchResults(
      results.filter((employee) => {
        let name = `${employee.name.first} ${employee.name.last}`;
        return (
          name.toLowerCase().includes(search) ||
          employee.email.toLowerCase().includes(search) ||
          employee.cell.includes(search)
        );
      })
    );
  }, [results, search]);

  // take in search results on input change
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // Run our Sorting functions and change direction of caret on click
  const handleOnClick = () => {
    if (caret === "down") {
      setCaret("up");
      sortDecending();
    } else {
      setCaret("down");
      sortAcending();
    }
  };
  
  // Sorting functions
  const sortAcending = () => {
    setSearchResults(
      searchResults.sort((a, b) => (a.name.last > b.name.last ? 1 : -1))
    );
  };
  const sortDecending = () => {
    setSearchResults(
      searchResults.sort((a, b) => (a.name.last < b.name.last ? 1 : -1))
    );
  };

  return (
    <>
      <SearchBar search={search} handleInputChange={handleInputChange} />
      <Container>
        <Table caretDir={caret} handleOnClick={handleOnClick}>
          {searchResults.map((employee) => (
            <TableItem
              key={employee.id.value}
              image={employee.picture.medium}
              name={employee.name.first + " " + employee.name.last}
              phone={employee.cell}
              email={employee.email}
            />
          ))}
        </Table>
      </Container>
    </>
  );
}

export default Home;
