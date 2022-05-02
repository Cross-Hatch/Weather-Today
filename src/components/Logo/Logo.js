import { Container, Img, LogoName } from './Logo.style';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <Container>
      <Img src={logo} alt="app logo" />
      <LogoName>
        Weather<span>Today</span>
      </LogoName>
    </Container>
  );
};

export default Logo;
