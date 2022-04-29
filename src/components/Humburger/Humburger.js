import { Container, Img } from './Humburger.style';
import menu from '../../assets/menu.svg';

const Humburger = () => {
  return (
    <Container>
      <Img src={menu} alt="Humburger icon" />
    </Container>
  );
};

export default Humburger;
