import React from 'react';
import PropTypes from 'prop-types';
import { buildImageObj } from 'lib/helpers';
import { imageUrlFor } from 'lib/image-url';
import BlockContent from 'components/block-content';
import { Slide, TextBox } from './hero-slider.css';

const Card = ({ image, backgroundColor, body }) => {
  return (
    <Slide image={image.asset.url} color={backgroundColor.rgb}>
      <TextBox>
        <BlockContent blocks={body} />
      </TextBox>
    </Slide>
  );
};

const HeroSlider = ({ images }) => (
  <section>
    {images.map(image => (
      <Card {...image} key={image._key} />
    ))}
  </section>
);

HeroSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeroSlider;
