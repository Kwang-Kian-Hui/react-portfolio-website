import "./InitPage.css";
import "../../const/app_styles.css";

const InitPage = (props) => {
  return (
    <div className="init-page" ref={props.innerRef}>
      <div className="titleTextWhiteFont">
        Design
        <br />
        <div className="titleTextHighlightDarkThemeFont">Create</div>
        Innovate
      </div>
    </div>
  );
}

export default InitPage;
