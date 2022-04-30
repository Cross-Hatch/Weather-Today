import { Container, SearchBox, SearchButton } from './SearchBar.style';
import search from '../../assets/search-button.svg';

const SearchBar = () => {
  return (
    <Container>
      <SearchBox type="text" placeholder="Search" />
      <SearchButton>
        <img src={search} alt="Search button" />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
