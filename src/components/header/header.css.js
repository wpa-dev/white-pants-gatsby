import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  backface-visibility: hidden;

  a {
    padding: 4rem;
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }

    &:last-child {
      padding-left: 0;
    }
  }
`;
