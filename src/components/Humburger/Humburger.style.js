import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto 0 0;
  padding: 0.5em;
  aspect-ratio: 1 / 1;
  transition: transform 300ms ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Img = styled.img`
  filter: ${(props) => props.theme.shadow};
`;
