import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Container, InnerContainer } from './header.css';
import Logo from './logo';
import Nav from 'components/header/nav';

// Animation variants
const variants = {
  visible: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  hidden: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <Container>
    <InnerContainer>
      <Link to="/">
        <Logo id="logo" height="4rem" fill="white" />
      </Link>
      <Nav />
    </InnerContainer>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
