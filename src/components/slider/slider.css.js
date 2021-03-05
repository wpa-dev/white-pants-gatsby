import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  padding: 2rem;
  background-image: url(${props => props.img});
`;

export const TextBox = styled.div `
  position: absolute;
  right: 10%;
  bottom: 240px;
`