import Humburger from '../Humburger/Humburger';
import Logo from '../Logo/Logo';
import { Container } from './Header.style';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Humburger />
    </Container>
  );
};

export default Header;
