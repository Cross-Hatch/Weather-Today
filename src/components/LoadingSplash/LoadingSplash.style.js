import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  inset: 0 auto auto 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.gradient};
  z-index: 100;
`;

export const ImgContainer = styled.div`
  position: absolute;
  inset: 40% auto auto 50%;
  transform: translate(-50%, -50%);
  z-index: 101;

  img {
    width: 7em;
    aspect-ratio: 1;
  }
`;

export const LogoName = styled.div`
  font-size: 2em;
  font-weight: bolder;
  position: absolute;
  inset: auto auto 5% 50%;
  transform: translate(-50%, 0);
  z-index: 102;

  span {
    font-weight: 300;
  }
`;
