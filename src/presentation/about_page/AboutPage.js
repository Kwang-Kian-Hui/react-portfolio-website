import React, { useState, Component, Fragment } from "react";

import "./AboutPage.css";
import "../../const/app_styles.css";
import AboutPageBody from "./AboutPageBody";

const AboutPage = (props) => {
  // var state = { matches: window.matchMedia("(min-width: 1024px)").matches };
  // const state = window.innerWidth > 1024;
  const [deviceIsBelowWidthThreshold, setdeviceIsBelowWidthThreshold] =
    useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      function handleResize() {
        if (window.innerWidth > 1024) {
          setdeviceIsBelowWidthThreshold(true);
        } else {
          setdeviceIsBelowWidthThreshold(false);
        }
      }
      window.addEventListener("resize", handleResize);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="about-page" ref={props.innerRef}>
      <div className="about-page-layout">
        <div className="about-title-layout">
          <p className="item-a subtitleTextHighlightDarkThemeFont">
            About{deviceIsBelowWidthThreshold && <Fragment>&nbsp;</Fragment>}
          </p>
          <p className="item-b subtitleTextWhiteFont">Me</p>
        </div>
        <AboutPageBody />
      </div>
    </div>
  );

  // render(props) {
  //   console.log(props);

  //   return (
  //     <div className="about-page">
  //       <div className="about-page-layout">
  //         <div className="about-title-layout">
  //           <p className="item-a subtitleTextHighlightDarkThemeFont">
  //             About{this.state.matches && <Fragment>&nbsp;</Fragment>}
  //           </p>
  //           <p className="item-b subtitleTextWhiteFont">Me</p>
  //         </div>
  //         <AboutPageBody />
  //       </div>
  //     </div>
  //   );
  // }
};

export default AboutPage;
