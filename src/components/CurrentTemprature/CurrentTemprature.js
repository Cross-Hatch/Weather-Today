import Temprature from '../Temprature/Temprature';
import { Container, Description } from './CurrentTemprature.style';

const CurrentTemprature = ({ temprature, unit, description }) => {
  return (
    <Container>
      <Temprature temprature={temprature} unit={unit} />
      <Description>{description}</Description>
    </Container>
  );
};

export default CurrentTemprature;
