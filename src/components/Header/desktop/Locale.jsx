import ImageLink from '../ImageLink';
import flag from '@/assets/desktop/information/us-flag.png';

const Locale = () => (
  <div className="locale">
    <ImageLink anchorClass="flex" title="United States" link="#" width="22" src={flag} />
    <div className="language">EN</div>
  </div>
);

export default Locale;
