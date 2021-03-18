import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const SpacingSection = styled.section`
  height: 110vh;
  z-index: 0;
`

export const FooterSection = styled.footer`
  position: fixed;
  z-index: 0 !important;
`

export const FixedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  background-color: black;
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  min-height: calc(100vh - 8rem);
  padding: 4rem;
  }
`

export const TextBox = styled.div`
  width: 100%;
  margin-top: 4.8rem;
  word-wrap: break-word;
  color: white;
  text-align: center;

  & a {
    font-size: 4.6vw;
    color: white;
    text-decoration: none;
    display: block;

    ${MEDIA.TABLET`
      font-size: 6.4vw;
    `}
  }
`

export const Title = styled.h1`
  font-size: 8.4vw;
  font-variation-settings: 'wght' 700;

  ${MEDIA.TABLET`
    font-size: 12vw;
  `}
`

export const CompanyInfo = styled.span`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .1em;

  ${MEDIA.TABLET`
    font-size: 1.25rem;
  `}
`