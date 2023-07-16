import styled from "styled-components";

export const Container = styled.div`
display: ${props => props.flex ? 'flex' : 'column'};
flex: 1;
/* height: 100vh; */
padding: 0 ${props => props.flex ? '0' : '30px'};
background: var(--blackthema-light-opacity, rgba(33, 33, 33, 0.99));
color: white;
`