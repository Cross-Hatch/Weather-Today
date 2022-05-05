import ForecastCardItem from '../ForecastCardItem/ForecastCardItem';
import { Container, ForecastContainer } from './AsidePanel.style';

const AsidePanel = ({icon}) => {
  return (
    <Container>
    <ForecastContainer>
        <div>
            <ForecastCardItem icon={icon} day={'Sunday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
            <ForecastCardItem icon={icon} day={'Monday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
            <ForecastCardItem icon={icon} day={'Tuesday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
            <ForecastCardItem icon={icon} day={'Wednesday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
            <ForecastCardItem icon={icon} day={'Thursday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
            <ForecastCardItem icon={icon} day={'Friday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
            <ForecastCardItem icon={icon} day={'Satureday'} temprature={{ morning: '20', night: '26' }} unit={'°C'} />
         </div>
      </ForecastContainer>
    </Container>
  );
};

export default AsidePanel;
