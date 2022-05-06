import { createContext, useState } from 'react';
import useFetchWeather from './useFetchWeather';

export const WeatherContext = createContext();

export function WeatherContexProvider({ children }) {
  const [location, setLocation] = useState('ghana');
  const { data, error } = useFetchWeather({ location: location });

//   console.log(data, location)
  const setValue = (locate) => {
    setLocation(locate);
  };

  return (
    <WeatherContext.Provider value={{location, setValue, data, error}} >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
