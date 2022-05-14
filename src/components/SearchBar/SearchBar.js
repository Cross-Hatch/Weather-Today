import { Container, SearchBox, SearchButton } from './SearchBar.style';
import search from '../../assets/search-button.svg';
import { useContext, useState } from 'react';
import { WeatherContext } from '../../hooks/WeatherContext';

const SearchBar = () => {
  const [temporary, setTemporary] = useState();
  const {setValue} = useContext(WeatherContext)

  function searchLocation(e) {
    if (e.key === 'Enter') {
      setValue(temporary);
    }
  }
  // console.log(data);

  return (
      <Container>
        <SearchBox
          type="text"
          placeholder="Search"
          onChange={(e) => setTemporary(e.target.value)}
          onKeyUp={searchLocation}
        />
        <SearchButton>
          <img src={search} alt="Search button" />
        </SearchButton>
      </Container>
  );
};

export default SearchBar;
