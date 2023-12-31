import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100vh;
background: #181818;
overflow-y: scroll;
padding: 30px;
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