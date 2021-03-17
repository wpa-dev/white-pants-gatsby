import React from 'react';
import { Link } from 'gatsby';
import { Container, Item } from './nav.css';

const Nav = (props) => (
  <Container>
    <ul>
      <Item>
        <Link to="/work">Work</Link>
      </Item>
      <Item>
        <Link to="/office">Office</Link>
      </Item>
      <Item>
        <Link to="/journal">Journal</Link>
      </Item>
    </ul>
  </Container>
)

export default Nav
