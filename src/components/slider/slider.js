import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './slider.css';


const Slider = ({ children }) => (
  <Container img="">
    <TextBox>
      {children}
    </TextBox>
  </Container>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
