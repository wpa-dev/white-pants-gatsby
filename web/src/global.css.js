import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

import BebasNeueEot from 'fonts/bebas-neue-v2-latin-regular.eot?#iefix'
import BebasNeueWoff2 from 'fonts/bebas-neue-v2-latin-regular.woff2'
import BebasNeueWoff from 'fonts/bebas-neue-v2-latin-regular.woff'
import BebasNeueTtf from 'fonts/bebas-neue-v2-latin-regular.ttf'
import BebasNeueSvg from 'fonts/bebas-neue-v2-latin-regular.svg#BebasNeue'
import SyneTtf from 'fonts/Syne-VariableFont_wght.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: ${props => props.fontWeight || '400'};
    font-display: ${props => props.fontDisplay || 'auto'};
    src: url('fonts/bebas-neue-v2-latin-regular.eot');
    src: local('Bebas Neue'),
        url(${BebasNeueEot}) format('embedded-opentype'),
        url(${BebasNeueWoff2}) format('woff2'),
        url(${BebasNeueWoff}) format('woff'),
        url(${BebasNeueTtf}) format('truetype'),
        url(${BebasNeueSvg}) format('svg');
  }

  @font-face {
    font-family: 'Syne';
    font-style: normal;
    font-variation-settings: 'wght' 400;
    font-display: ${props => props.fontDisplay || 'auto'};
    src: url(${SyneTtf}) format('truetype-variations');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Syne",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  section {
    position: relative;
    z-index: 3;
  }

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    font-size: 2.8rem;
    line-height: 1.75em;

    ${MEDIA.TABLET`
      font-size: 2rem;
    `};
  }

  h1 {
    font-size: 8.4rem;
    line-height: .85em;
    font-variation-settings: 'wght' 700;
  }
`;
