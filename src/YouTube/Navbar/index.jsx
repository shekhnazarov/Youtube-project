import React from "react";
import {Container, Category, Icons, SearchInput, Span, AccountImg} from "./style";
import logo from "../../assets/images/navbar-logo.png"
import accountImg from "../../assets/images/account.png"


export class Navbar extends React.Component{
  render(){
    return <Container>
      <Category>
        <Icons.Burger />
        <Icons.Logo src={logo}/>
      </Category>
      <Category>
        <SearchInput placeholder="Search" />
        <Span><Icons.Search /></Span>
      </Category>
      <Category>
        <Icons.Video />
        <Icons.GridMenu />
        <Icons.Bell />
        <AccountImg src={accountImg} />
      </Category>
    </Container>
  }
}

export default Navbar;