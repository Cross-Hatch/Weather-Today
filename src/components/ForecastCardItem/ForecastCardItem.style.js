import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 8em;
  border-radius: 0.5em;
  background-image: ${(props) => props.theme.gradient};
`;

export const DayItem = styled.div`
  color: ${(props) => props.theme.dark};
  font-weight: bolder;
  margin: 1em 0;
  padding: 0.2em 1em;
  background-color: ${(props) => props.theme.light};
  border-radius: 100em;
`;

export const TempContainer = styled.div`
  font-weight: bolder;

  sup {
    font-weight: bolder;
    vertical-align: middle;
  }
`;

export const Icon = styled.img`
  width: 3em;
  aspect-ratio: 1;
`;
