import React from 'react';
import { buildImageObj } from 'lib/helpers';
import { imageUrlFor } from 'lib/image-url';
import BlockContent from 'components/block-content';
import { ScrollContainer, Slide, TextBox } from './hero-slider.css';

function ImageSlide (props) {
  const { image, backgroundColor, body } = props
  return (
    <Slide image={image.asset.url} backgroundColor={backgroundColor.hex} className="active">
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
    <ScrollContainer>
      {images.map(image => (
        <ImageSlide {...image} key={image._key} />
      ))}
    </ScrollContainer>
  );
};

ImageSlide.defaultProps = {
  image: '',
  backgroundColor: '#000000',
  body: '',
}

export default HeroSlider;
