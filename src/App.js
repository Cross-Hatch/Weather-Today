import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Wrapper } from './components/GlobalStyle.style';
import { theme } from './components/ThemeProvider.style';
import { WeatherContexProvider } from './hooks/WeatherContext';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <WeatherContexProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout/>
      </ThemeProvider>
    </WeatherContexProvider>
  );
}

export default App;
