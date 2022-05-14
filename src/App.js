// import 'dotenv/config'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Wrapper } from './components/GlobalStyle.style';
import { theme } from './components/ThemeProvider.style';
import { WeatherContexProvider } from './hooks/WeatherContext';
import Layout from './components/Layout/Layout';
import useFetchWeather from './hooks/useFetchWeather';
import LoadingSplash from './components/LoadingSplash/LoadingSplash';
import { useEffect, useState } from 'react';

function App() {
  const [loc, setLoc] = useState();
  const {data} = useFetchWeather({location: loc})
  const API_KEY = 'a62f19204db4271d56c8d5f2dc4c0dc3'

  useEffect(() => {
    (() => {
      try {
        if('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
              setLoc(data[0].name)
            })
          });
          
        } else {
          throw new Error('Please Allow Location!')
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  
  return (
    <WeatherContexProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {data ? <Layout/> : <LoadingSplash/>}
      </ThemeProvider>
    </WeatherContexProvider>
  );
}

export default App;
