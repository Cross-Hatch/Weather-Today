import {
  Container,
  DayItem,
  Icon,
  TempContainer,
} from './ForecastCardItem.style';
import Temprature from '../Temprature/Temprature';

const ForecastCardItem = ({ icon, day, temprature, unit }) => {
  return (
    <Container>
      <DayItem>{day}</DayItem>
      <Icon src={icon} alt="weather icon" />
      <>
        <TempContainer>
          Morning - <Temprature temprature={temprature.morning} unit={unit} />
        </TempContainer>
        <TempContainer>
          Night - <Temprature temprature={temprature.night} unit={unit} />
        </TempContainer>
      </>
    </Container>
  );
};

export default ForecastCardItem;
