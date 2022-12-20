import ImageLink from './ImageLink';
import search from '@/assets/desktop/nav/search.png';

const Search = () => (
  <div className="search">
    <input placeholder="Search" className="input" />
    <div>
      <ImageLink anchorClass="flex" src={search} title="search" width="16" />
    </div>
  </div>
);

export default Search;
