import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-block: 2em;
`;

export const SearchBox = styled.input`
  background-color: rgba(124, 124, 124, 0.2);
  width: 20em;
  height: 3.5em;
  border: none;
  border-radius: 1.75em;
  outline: none;
  margin: 0 0.5em 0 0.5em;
  padding: 1em 1.2em;
`;

export const SearchButton = styled.div`
  background-color: rgba(124, 124, 124, 0.2);
  padding: 0.8em;
  border-radius: 100%;
  margin: 0 0.5em;
  height: 3.5em;
  aspect-ratio: 1;
`;
