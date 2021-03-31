import styled from 'styled-components';

export const ScrollContainer = styled.section`
  height: 100vh;

  & .active {
    height: 100%;
  }
`

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-image: url(${props => props.image});
  background-color: ${props => props.backgroundColor};
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: auto 100%;
  background-attachment: fixed;
  transform: translateZ(0);
  transition: height 0.9s ease-in-out;

  &:nth-child(1) {
    z-index: 10;
  }

  &:nth-child(2) {
    z-index: 9;
  }

  &:nth-child(3) {
    z-index: 8;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  right: 10%;
  bottom: 240px;
  color: #fff;

  & h1, h2, h3 {
    margin-bottom: 2rem;
  }
`;