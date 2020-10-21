import React from "react";
import Hero from './components/Hero'
import Container from './components/Container'
import Table from './components/Table'
import Employees from './components/Employees'




function App() {
  return (
    <>
      <Hero>
        <h1>Employee Directory</h1>
      </Hero>
      <Container>
          <Table
          image="das"
          name="Santiago Solana"
          phone="678-687-1198"
          email="santiago.sjs@gmail.com"
          />
          <Employees/>
      </Container>
    </>
  );
}

export default App;