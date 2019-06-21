import React from "react";
import "./about-index.scss";
import "../../styles/standards.scss";
import { Link } from "react-router-dom";
// import iconClose from './../../../src/images/close.svg';


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
        <p>
          Skilled Web Developer using HTML5, CSS3, SASS with knowledge in Javascript, React JS and Node JS. Strong Organization and Team-oriented skills. Current finishing a
          Diploma focused in Web and Mobile Application Development from CICCC - Cornerstone International Community College of Canada.
        </p>
      </div>
    );

  }
}