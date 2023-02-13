import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import {items} from "./data";
import MenuList from "./components/MenuList";
function App() {
  const [data,setData] = useState(items);


  return (
    <>
    <NavBar/>
    <Container>
      <Header/>
      <Category/>
      <MenuList items={items}/>
      </Container>
    </>
    
  );
}

export default App;
