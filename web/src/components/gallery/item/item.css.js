import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding-top: 24rem;
  position: relative;

  ${MEDIA.TABLET`
    padding-top: 12rem;
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 4rem;
  align-items: center;
  margin-top: 2rem;

  & > div {
    grid-column: span 3;
  }

  ${MEDIA.TABLET`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;

    & > div {
      order: 1;
    }
  `};
`

export const Title = styled.span`
  display: block;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 8vw;
  line-height: .85em;
  color: #fff;
  mix-blend-mode: difference;
  text-align: ${props => props.flipped ? "right" : "left"};

  ${MEDIA.TABLET`
    font-size: 12vw;
    text-align: left;
  `};
`;

export const Copy = styled.p`
  grid-column: span 2;
  text-align: ${props => props.flipped ? "right" : "left"};

  ${MEDIA.TABLET`
    text-align: left;
    order: 2;
  `};
`;
