import Header from "./components/Header";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [locale, setLocale] = useState('en');

  return (
    <>
      <Header isDesktop />
      {/* <Content isDesktop /> */}
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
