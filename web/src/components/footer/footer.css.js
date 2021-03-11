import styled from 'styled-components';

export const Container = styled.section`
  height: 110vh;
`;

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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  word-wrap: break-word;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;