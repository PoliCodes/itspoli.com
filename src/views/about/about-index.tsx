import React from "react";
import "./about-index.scss";
import "../../styles/standards.scss";
import { Link } from "react-router-dom";
import iconClose from './../../../src/images/close.svg';


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
        <h1>About Me<Link to="/"><img className="icons" src={iconClose} alt="close"/></Link></h1>
        <p>
          Experienced and skilled in Computer Repair, Technical Support, Web Development using HTML5, CSS3, SASS with knowledge in Javascript and React JS. Strong Organization and Team-oriented skills. Current finishing a
          Diploma focused in Web and Mobile Application Development from CICCC - Cornerstone International Community College of Canada.
        </p>
      </div>
    );

  }
}