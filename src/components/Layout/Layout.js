import City from '../City/City';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import sunny from '../../assets/weather-icon/sunny.png';
import CurrentTemprature from '../CurrentTemprature/CurrentTemprature';
import Greatings from '../Greatings/Greatings';
import AsidePanel from '../AsidePanel/AsidePanel';
import { Wrapper } from '../GlobalStyle.style';
import {WeatherContext} from '../../hooks/WeatherContext';
import { useContext } from 'react';

const Layout = () => {
  const {data, error, location} = useContext(WeatherContext)
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  console.log(location);

  function getDay(e) {
    const dd = new Date(e * 1000);
    return days[dd.getDay()];
  }

  function getGreet(e) {
    const dd = new Date(e * 1000);
    let greet

    if (dd.getHours() < '12') {
      greet = 'good morning'
    }else if (dd.getHours() < '17') {
      greet = 'good afternoon'
    }else if (dd.getHours() >= '17') {
      greet = 'good evening'
    }else {
      greet = 'error'
    }
    console.log(dd.getHours());
    return greet
  }

  return (
    <>
      <Header />
        <Wrapper>
          <div>
            <City city={location} timezone={data.timezone} />
            <WeatherIcon icon={sunny} alt="sunny" />
            <CurrentTemprature
              temprature={Math.floor(data.current.temp)}
              unit={'°C'}
              description={`Feels like ${Math.floor(data.current.feels_like)}°C`}
            />

            <Greatings time={getGreet(data.current.dt)} day={getDay(data.current.dt)} />
            <SearchBar />
          </div>
        </Wrapper>
        <AsidePanel />
    </>
  );
};

export default Layout;
