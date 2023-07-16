import React from "react";
import {Container} from "./style";
import Database from "../../database";
import {Title, Category, Icons, Wrapper} from './style'

let base = Database;

export class Sidebar extends React.Component{
  render(){
    return <Container>
      {base.map(value => {
        return <Category>
          <Title fontWeight='normal'>{value.title}</Title>
          {value.data.map(item => {
            return <Wrapper>
              <Icons.Home />
              <Title>{item.subTitle}</Title>
            </Wrapper>
          })}
          </Category>
      }) }   
    </Container>
  }
}

export default Sidebar;