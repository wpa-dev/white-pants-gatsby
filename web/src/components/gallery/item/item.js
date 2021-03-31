import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Grid, Title, Copy } from './item.css';

export const Item = ({ title, copy, image }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>
      <GatsbyImage image={image ? image.childImageSharp.gatsbyImageData : {}} alt={title} />
      <Copy>{copy}</Copy>
    </Grid>
  </Container>
);

export const ItemFlipped = ({ title, copy, image }) => (
  <Container>
    <Title flipped>{title}</Title>
    <Grid>
      <Copy flipped>{copy}</Copy>
      <GatsbyImage image={image ? image.childImageSharp.gatsbyImageData : {}} alt={title} />
    </Grid>
  </Container>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

ItemFlipped.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};
