import WhiteAndHighlightText from "../../const/WhiteAndHighlightText";
import "./AboutPage.css";

function AboutPageBody() {
  return (
    <div className="about-body-layout">
      <div className="body-text-layout">
        <WhiteAndHighlightText text1="Hi my name is" text2="Kian Hui" />
      </div>
      <div className="body-text-layout">
        <WhiteAndHighlightText text1="I am a" text2="Software Engineer" />
      </div>
      <p className="bodyText2WhiteFontMedium">
        I have a deep passion for learning and applying new technologies to
        diverse projects, continuously reinforcing my expertise in their
        respective domains
      </p>
      <p className="bodyText2WhiteFontMedium">
        My goal is to acquire expertise across multiple specializations and
        maintain a versatile skill set that aligns with the evolving demands of
        the industry
      </p>
      <p className="bodyText2WhiteFontMedium">
        With a growth mindset, I am eager to embrace new challenges and apply my
        skills in innovative ways
      </p>
      <p className="bodyText2WhiteFontMedium">
        Please feel free to reach out to discuss any opportunities or projects
        where my technical experise and passion for learning can contribute to
        success
      </p>
    </div>
  );
}

export default AboutPageBody;
