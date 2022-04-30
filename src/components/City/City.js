import { CityName, Container, TimeZone } from './City.style';

const City = (props) => {
  return (
    <Container>
      <CityName>{props.city}</CityName>
      <TimeZone>{props.timezone}</TimeZone>
    </Container>
  );
};

export default City;
