import React from 'react';
import { buildImageObj } from 'lib/helpers';
import { imageUrlFor } from 'lib/image-url';
import BlockContent from 'components/block-content';
import { Slide, TextBox } from './hero-slider.css';

function ImageSlide (props) {
  const { image, backgroundColor, body } = props
  return (
    <Slide image={image.asset.url} color={backgroundColor.hex}>
      <TextBox>
        {body &&
          <BlockContent blocks={body} />
        }
      </TextBox>
    </Slide>
  );
};

function HeroSlider ({ images }) {
  return (
    <section>
      {images.map(image => (
        <ImageSlide {...image} key={image._key} />
      ))}
    </section>
  );
};

ImageSlide.defaultProps = {
  image: '',
  backgroundColor: 'black',
  body: '',
}

export default HeroSlider;
