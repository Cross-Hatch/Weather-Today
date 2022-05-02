import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 0 auto;
  padding: 0.5em;
  aspect-ratio: 1 / 1;
  transition: transform 300ms ease;
  transform-origin: center;

  &:hover {
    transform: translateY(-4px);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Img = styled.img`
  transform: rotateY(180deg);
  filter: ${(props) => props.theme.shadow};
`;
