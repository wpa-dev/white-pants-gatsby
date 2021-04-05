import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #000;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;

  & h1 {
    color: #fff;
    margin-bottom: 4rem;
  }
`

export const Title = styled.h2`
  margin: 2rem 0;

  @nest & a {
    color: inherit;
    text-decoration: none;
  }
`

export const Listings = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`

// .browseMoreNav {
//   composes: small from './typography.module.css';
//   margin-top: 1rem;
//   text-align: right;

//   @nest & a {
//     display: inline-block;
//     padding: 0.5rem 0;
//     color: inherit;
//     text-decoration: none;

//     @media (hover: hover) {
//       @nest &:hover {
//         color: var(--color-accent);
//       }
//     }
//   }
// }
