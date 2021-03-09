import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  padding: 2rem;
  background-image: url(${props => props.img});
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: auto 100%;
  background-attachment: fixed;
  transform: translateZ(0);
`;

export const TextBox = styled.div `
  position: absolute;
  right: 10%;
  bottom: 240px;
`