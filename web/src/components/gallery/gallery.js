import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemFlipped }  from 'components/gallery/item';
import { Container, StyledLink } from './gallery.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      i % 2 === 0 ? <Item {...item} key={i} /> : <ItemFlipped {...item} key={i}/>
    ))}
    <StyledLink to="/work">More projects &#8594;</StyledLink>
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
