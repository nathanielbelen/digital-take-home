import { useState } from 'react';
import ImageLink from './ImageLink';
import search from '@/assets/desktop/nav/search.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit(searchTerm)
  };

  return (
    <form className="search">
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search" className="input" />
      <button type="submit" className="search-button" onClick={handleSubmit}>
        <ImageLink anchorClass="flex" src={search} title="search" width="16" />
      </button>
    </form>
  );
};

export default Search;
