import Temprature from '../Temprature/Temprature';
import { Container, Description } from './CurrentTemprature.style';

const CurrentTemprature = (props) => {
  return (
    <Container>
      <Temprature temprature={props.temprature} unit={props.unit} />
      <Description>{props.description}</Description>
    </Container>
  );
};

export default CurrentTemprature;
