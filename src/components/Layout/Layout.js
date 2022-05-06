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
  const {data} = useContext(WeatherContext)

  return (
    <>
      <Header />
        <Wrapper>
          <div>
            <City city={data.name} timezone="Africa/Ghana" />
            <WeatherIcon icon={sunny} alt="sunny" />
            <CurrentTemprature
              temprature={20}
              unit={'°C'}
              description={'Feels like 18°C'}
            />

            <Greatings time={'good morning'} day={'Sunday'} />
            <SearchBar />
          </div>
        </Wrapper>
        <AsidePanel icon={sunny} />
    </>
  );
};

export default Layout;
