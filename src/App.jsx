import Header from "./components/Header";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import "./App.css";

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [locale, setLocale] = useState('en');

  return (
    <>
      <Header isDesktop={isDesktop} />
    </>
  );
};

// static content background
const Content = ({ isDesktop }) => {
  return (
    <div className="content" style={{ color: "white" }}>
      {isDesktop ? "desktop" : "mobile"}
    </div>
  );
};

export default App;
