import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  backface-visibility: hidden;

  #logo {
    fill: white;
    height: 4rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 4rem;
`;
