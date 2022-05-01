import { CityName, Container, TimeZone } from './City.style';

const City = ({ city, timezone }) => {
  return (
    <Container>
      <CityName>{city}</CityName>
      <TimeZone>{timezone}</TimeZone>
    </Container>
  );
};

export default City;
