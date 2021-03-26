import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.color};
`

export const Content = styled.div`
  padding: 16rem 36rem;
  color: #fff;

  & h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 14rem;
    margin-bottom: .25em;
  }
`