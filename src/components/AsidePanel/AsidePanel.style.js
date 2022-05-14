import styled from 'styled-components';

export const Container = styled.aside`
  background-image: ${(props) => props.theme.gradient};
  box-shadow: -10px 20px 50px 8px #0a0a0a;
  border-radius: 10px 0 0 10px;
  position: absolute;
  right: 0;
  top: 0;
  width: 35vw;
  min-height: 100vh;
  padding: 5em 2em;
  z-index: 1;
`;

export const ForecastContainer = styled.div`
  ::-webkit-scrollbar {
    width: 0.8em;
    height: 0.8em;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #202020;
    border-radius: 50px;
  }

  overflow-x: scroll;
  /* min-width: 50em; */

  & > div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-flow: row;
    column-gap: 1.5em;
    margin: 1em 0;
  }
`;

export const ForecastStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3em;
`;
