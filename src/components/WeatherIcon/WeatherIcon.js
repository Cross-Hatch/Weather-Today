import { Container, Icon } from './WeatherIcon.style';

const WeatherIcon = (props) => {
  return (
    <Container>
      <Icon src={props.icon} alt={props.name} />
    </Container>
  );
};

export default WeatherIcon;
