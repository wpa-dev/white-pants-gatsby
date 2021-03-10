import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Work</Link>
      </li>
      <li>
        <Link to="/about">Office</Link>
      </li>
      <li>
        <Link to="/about">Journal</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
