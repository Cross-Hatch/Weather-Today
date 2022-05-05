import { ThemeProvider } from 'styled-components';
import City from './components/City/City';
import { GlobalStyle, Wrapper } from './components/GlobalStyle.style';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { theme } from './components/ThemeProvider.style';
import WeatherIcon from './components/WeatherIcon/WeatherIcon';
import sunny from './assets/weather-icon/sunny.png';
import CurrentTemprature from './components/CurrentTemprature/CurrentTemprature';
import Greatings from './components/Greatings/Greatings';
import AsidePanel from './components/AsidePanel/AsidePanel';


function App() {
  
  
  const day_Form = (d)=>{
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day = days[d.getDay()]
    

    return `${day}`
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <div>
          <City city="Dansoman" timezone="Africa/Ghana" />
          <WeatherIcon icon={sunny} alt="sunny" />
          <CurrentTemprature
            temprature={20}
            unit={'°C'}
            description={'Feels like 18°C'}
          />

          <Greatings time={'good morning'} day= {day_Form(new Date())}/>
          <SearchBar />
        </div>
      </Wrapper>
      <AsidePanel icon={sunny} />
    </ThemeProvider>
  );
}

export default App;
