import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 4rem;
  background-color: white;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
