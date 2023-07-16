import React from "react";
import {Container} from "./style"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Navbar from "./Navbar";

export class YouTube extends React.Component{
  render(){
    return <Container>
      <Navbar />
      <Container flex>
        <Sidebar />
        <Body />
      </Container>
    </Container>
  }
}

export default YouTube;