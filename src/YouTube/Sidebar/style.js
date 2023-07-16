import styled from "styled-components";
import {ReactComponent as home} from '../../assets/icons/home.svg'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 100vh;
overflow-y: scroll;
&::-webkit-scrollbar {
  width: 5px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`
export const Category = styled.div`
border-top: 1px solid #424242;
border-bottom: 1px solid #424242;
padding: 5px 0;
`

export const Title = styled.h2`
color: #AAA;
font-size: 14px;
font-style: normal;
font-weight: ${props => props.fontWeight === "normal" ? '500' : '300'};
line-height: normal;
margin: 10px 0;
`

export const Icons = styled.div``
Icons.Home = styled(home)`
width: 25px;
height: 25px;
margin-right: 10px;
` 
export const Wrapper = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`