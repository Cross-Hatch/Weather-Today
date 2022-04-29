import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle.style';
import Header from './components/Header/Header';
import { theme } from './components/ThemeProvider.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
