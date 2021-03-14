import React from 'react';
import PropTypes from 'prop-types';
import { buildImageObj } from 'lib/helpers';
import { imageUrlFor } from 'lib/image-url';
import BlockContent from 'components/block-content';
import { Slide, TextBox } from './hero-slider.css';

const Card = props => {
  return (
    <Slide image={props.image.asset.url} color={props.backgroundColor.rgb}>
      <TextBox>
        <BlockContent blocks={props.body} />
      </TextBox>
    </Slide>
  );
};

function HeroSlider({ images }) {
  return (
    <section>
      {images.map(image => (
        <Card {...image} key={image._key} />
      ))}
    </section>
  );
};

export default HeroSlider;
