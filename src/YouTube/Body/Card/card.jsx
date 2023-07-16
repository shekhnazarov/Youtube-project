import React from "react";
import {Item, UserImg, Video, Title, UserName} from "./cardStyle";

export class Card extends React.Component{
  render(){
    const {video, title, userImg, userName, views, time} = this.props
    return <Item>
      <Video src={video} />
      <div style={{display: "flex", padding: '12px 0'}}>
        <UserImg src={userImg} />
        <div>
          <Title>{title}</Title>
          <UserName>{userName}</UserName>
          <UserName>{views} {time}</UserName>
        </div>
      </div>
    </Item>
  }
}

export default Card;