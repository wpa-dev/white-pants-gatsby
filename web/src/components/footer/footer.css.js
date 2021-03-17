import styled from 'styled-components';

export const SpacingSection = styled.section`
  height: 110vh;
  z-index: 0;
`

export const Section = styled.section`
  position: fixed;
  z-index: 0 !important;
`

export const FixedContainer = styled.footer`
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
  word-wrap: break-word;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: center;

    & a, p {
      font-size: 4.6vw;
      color: white;
      text-decoration: none;
    }
  }
`

export const TextBox = styled.div`
  width: 100%;
  margin-top: 2.4rem;
`

export const Title = styled.span`
  font-size: 9.2vw;
  font-variation-settings: 'wght' 700;
`

export const CompanyInfo = styled.span`
  font-size: 2rem;
`