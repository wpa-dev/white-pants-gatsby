import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextBox } from './slider.css';
import Space from '/content/images/slider/SPACE.jpg';


const Slider = ({ children }) => (
  <Container img={ Space } color="black">
    <TextBox>
      {children}
    </TextBox>
  </Container>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
