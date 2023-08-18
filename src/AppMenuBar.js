import "./AppMenuBar.css";

function AppMenuBar(props) {
  return (
    <div className="app-menu-bar">
      <img
        onClick={(event) => props.clickHandler(event, 0)}
        className="menu-icon"
        src={require("./assets/images/icons8-home-48-white.png")}
        alt="home icon"
      ></img>
      <img
        onClick={(event) => props.clickHandler(event, 1)}
        className="menu-icon"
        src={require("./assets/images/icons8-person-64-white.png")}
        alt="profile icon"
      ></img>
      <img
        onClick={(event) => props.clickHandler(event, 0)}
        className="menu-icon"
        src={require("./assets/images/icons8-work-60-white.png")}
        alt="work icon"
      ></img>
      <img
        onClick={(event) => props.clickHandler(event, 0)}
        className="menu-icon"
        src={require("./assets/images/icons8-portfolio-48-white.png")}
        alt="portfolio icon"
      ></img>
      <img
        onClick={(event) => props.clickHandler(event, 0)}
        className="menu-icon"
        src={require("./assets/images/icons8-view-carousel-48-white.png")}
        alt="view icon"
      ></img>
    </div>
  );
}

export default AppMenuBar;
