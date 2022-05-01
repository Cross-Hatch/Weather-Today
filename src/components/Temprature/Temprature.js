import { Container, Unit } from './Temprature.style';

const Temprature = ({ temprature, unit }) => {
  return (
    <Container>
      {temprature}
      <Unit>{unit}</Unit>
    </Container>
  );
};

export default Temprature;
