import { useContext } from 'react';
import ForecastCardItem from '../ForecastCardItem/ForecastCardItem';
import { Container, ForecastContainer, ForecastStatsContainer } from './AsidePanel.style';
import sunny from '../../assets/weather-icon/sunny.png';
import { WeatherContext } from '../../hooks/WeatherContext';
import ForecastStats from '../ForecastStats/ForecastStats';

const AsidePanel = () => {
  const { data, error } = useContext(WeatherContext);
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  function getDate(e) {
    const dd = new Date(e * 1000);
    return days[dd.getDay()];
  }

  return (
    <Container>
      <ForecastContainer>
        <div>
          {data.daily.slice(0,7).map((element, index) => (
            <ForecastCardItem
              icon={sunny}
              day={getDate(element.dt)}
              temprature={{
                morning: element.temp.morn,
                night: element.temp.night,
              }}
              unit={'°C'}
              key={index}
            />
          ))}
        </div>
      </ForecastContainer>
      <ForecastStatsContainer>
        <ForecastStats/>
      </ForecastStatsContainer>
    </Container>
  );
};

export default AsidePanel;
