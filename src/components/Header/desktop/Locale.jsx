import flag from '@/assets/desktop/information/us-flag.png';

const Locale = () => (
  <button type="button" className="locale">
    <div className="flex">
      <img src={flag} width="22" alt="US flag" />
    </div>
    <div className="language">EN</div>
  </button>
);

export default Locale;
