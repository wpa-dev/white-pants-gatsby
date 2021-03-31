import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { Link } from 'gatsby';

export const Container = styled.section`
  display: grid;
  grid-row-gap: 8rem;
  padding: 8rem 16rem;
  background-color: white;

  ${MEDIA.DESKTOP`
    padding: 8rem;
  `};

  ${MEDIA.TABLET`
    padding: 4rem;
  `};
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 6.4rem; 
  margin: 20rem auto 24rem auto;
  text-align: right;

  ${MEDIA.TABLET`
    font-size: 3.2rem;
    margin: 8rem auto 12rem auto;
    text-align: left;
  `};
`;