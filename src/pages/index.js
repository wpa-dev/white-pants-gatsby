import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Slider from 'components/slider';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Slider>Open. But we just need space.</Slider>
    <Gallery items={data.homeJson.gallery} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            gatsbyImageData (
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
