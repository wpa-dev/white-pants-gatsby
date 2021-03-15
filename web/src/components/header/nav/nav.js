import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/office">Office</Link>
      </li>
      <li>
        <Link to="/journal">Journal</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
