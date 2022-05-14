import Logo from '../Logo/Logo';
import { Container, ImgContainer, LogoName } from './LoadingSplash.style';
import logo from '../../assets/logo.png'

const LoadingSplash = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={logo} alt="logo" />
      </ImgContainer>
      <LogoName>
          Weather<span>Today</span>
      </LogoName>
    </Container>
  );
};

export default LoadingSplash;
