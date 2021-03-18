import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
`;

export const Item = styled.li`
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;

  & + li {
    margin-left: 4rem;
  }

  a {
    color: white;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`
