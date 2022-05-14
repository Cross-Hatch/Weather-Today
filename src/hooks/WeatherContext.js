import { createContext, useState } from 'react';
import useFetchWeather from './useFetchWeather';

export const WeatherContext = createContext();

export function WeatherContexProvider({ children }) {
  const [location, setLocation] = useState();
  const { data, error } = useFetchWeather({ location: location });
  
  const setValue = (o) => {
    setLocation(o);
  }
    
  return (
    <WeatherContext.Provider value={{location, setValue, data, error}} >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
