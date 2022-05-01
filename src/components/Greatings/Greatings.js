import { Container, Day, Greating } from './Greatings.style';

const Greatings = ({ time, day }) => {
  function getGreating(time) {
    return time;
  }

  return (
    <Container>
      <Greating>{getGreating(time)}</Greating>
      <Day>{day}</Day>
    </Container>
  );
};

export default Greatings;
