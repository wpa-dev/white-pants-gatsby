import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, InnerContainer } from './header.css';
import Logo from './logo';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, width, height, fill }) => (
  <AnimatedContainer>
    <Container>
      <InnerContainer>
        <Link to="/">
          <Logo id="logo" height="4rem" fill="white"/>
        </Link>

        <Nav />
      </InnerContainer>
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
