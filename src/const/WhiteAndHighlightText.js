import { Fragment } from "react";

const WhiteAndHighlightText = (props) => {
  return (
    <Fragment>
      <p className="bodyText2WhiteFontMedium">{props.text1}&nbsp;</p>
      <p className="bodyText2HighlightDarkThemeFontMedium">{props.text2}</p>
    </Fragment>
  );
}

export default WhiteAndHighlightText;