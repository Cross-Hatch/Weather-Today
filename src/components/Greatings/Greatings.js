import { Container, Day, Greating } from './Greatings.style';

const Greatings = (props) => {
  function getGreating(time) {
    return time;
  }

  return (
    <Container>
      <Greating>{getGreating(props.time)}</Greating>
      <Day>{props.day}</Day>
    </Container>
  );
};

export default Greatings;
