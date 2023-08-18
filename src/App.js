// import logo from "./logo.svg";
import { useRef } from "react";

import "./App.css";
import AppHeader from "./AppHeader";
import AppMenuBar from "./AppMenuBar";
import AboutPage from "./presentation/about_page/AboutPage";
import InitPage from "./presentation/init_page/InitPage";

function App() {
  const initPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const workPageRef = useRef(null);
  const portfolioPageRef = useRef(null);
  const projectViewPageRef = useRef(null);

  const scrollToPageOnClickHandler = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    switch (index) {
      case 0:
        initPageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 1:
        aboutPageRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      // case 2:
      //   workPageRef.current?.scrollIntoView({ behavior: "smooth" });
      //   break;
      // case 3:
      //   portfolioPageRef.current?.scrollIntoView({ behavior: "smooth" });
      //   break;
      // case 4:
      //   projectViewPageRef.current?.scrollIntoView({ behavior: "smooth" });
      //   break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <AppHeader />
      <AppMenuBar clickHandler={scrollToPageOnClickHandler}/>
      <InitPage innerRef={initPageRef} />
      <AboutPage innerRef={aboutPageRef} />
      {/* <header className="App-header">
        { <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }
      </header> */}
    </div>
  );
}

export default App;
