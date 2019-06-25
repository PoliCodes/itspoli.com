import React from "react";
import "./about-index.scss";
import "../../styles/standards.scss";
import { Link } from "react-router-dom";
import perfil from "../../images/perfil.png";


interface State {
  loaded: boolean;
}
interface Props {
}

export class AboutIndex extends React.Component<Props, State> {
  state = {
    loaded: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 50)
  }

  render() {
    return (
      <div className={`aboutMe content ${this.state.loaded ? "loaded" : "loading"}`}>
        <Link to="/"><svg className="iconClose" enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" height="28px" width="28px"><polygon points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "/></svg></Link>
        <h1>About Me</h1>
        <div className="perfil">
          <img src={perfil} alt="Perfil image"/>
        </div>
        <p>
          Proactive, adaptable, friendly, respectful and always ready to help Front End Developer. 
          A very organized and team-oriented person. Good knowledge of HTML, SASS, CSS, JS, typescript and React,
          and can easily find a way around Nodejs, MongoDB and SQL databases. Two years of experience as Front End Web Developer, 
          and currently improving skills in studying Web and Mobile Application Development in Vancouver.
        </p>
      </div>
    );
  }
}