import Header from '../Header/Header';
import { Container, Wrapper } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};

export default Layout;
