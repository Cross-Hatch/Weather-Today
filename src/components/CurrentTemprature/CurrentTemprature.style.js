import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 8rem;
  font-weight: bold;
  line-height: 0.7;

  & sup {
    font-size: 1.5rem;
    vertical-align: top;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: normal;
  margin: 0.3em 0;
`;
