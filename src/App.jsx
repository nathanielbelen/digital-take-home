import Header from './components/Header';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css';

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Header isDesktop={isDesktop} />
  );
};

export default App;
