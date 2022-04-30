import { Container, Unit } from './Temprature.style';

const Temprature = (props) => {
  return (
    <Container>
      {props.temprature}
      <Unit>{props.unit}</Unit>
    </Container>
  );
};

export default Temprature;
