import React from "react";
import "../../styles/standards.scss";
import "./skill-index.scss";
import { Link } from "react-router-dom";
import iconClose from './../../../src/images/close.svg';


interface State {
  loaded: boolean;
}
interface Props {
}

export class SkillsIndex extends React.Component<Props, State> {
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
      <div className={`skills content ${this.state.loaded ? "loaded" : "loading"}`}>
        <h1>Skills<Link to="/"><img className="icons" src={iconClose} alt="close" /></Link></h1>
        <p>
          Always learning and improving...
        </p>
        <ul className="progress">
          <li>
            <span>Html</span>
            <div className="meter">
              <span className="bar bar1"></span>
            </div>
          </li>
          <li>
            <span>Css/Scss</span>
            <div className="meter">
              <span className="bar bar2"></span>
            </div>
          </li>
          <li>
            <span>Javascript</span>
            <div className="meter">
              <span className="bar bar3"></span>
            </div>
          </li>
          <li>
            <span>Typescript</span>
            <div className="meter">
              <span className="bar bar4"></span>
            </div>
          </li>
          <li>
            <span>React JS</span>
            <div className="meter">
              <span className="bar bar5"></span>
            </div>
          </li>
          <li>
            <span>Git</span>
            <div className="meter">
              <span className="bar bar6"></span>
            </div>
          </li>
          <li>
            <span>Computer Technician</span>
            <div className="meter">
              <span className="bar bar7"></span>
            </div>
          </li>
          <li>
            <span>Technical Suport</span>
            <div className="meter">
              <span className="bar bar8"></span>
            </div>
          </li>
          <li>
            <span>OS Instalation (Windows / Linux)</span>
            <div className="meter">
              <span className="bar bar9"></span>
            </div>
          </li>
          <li>
            <span>Bash Commands</span>
            <div className="meter">
              <span className="bar bar10"></span>
            </div>
          </li>
        </ul>
        {/* <h1>Plus</h1>
        <ul>
          <li><span>Computer Technician</span></li>
          <li><span>Technical Suport</span></li>
          <li><span>OS Instalation (Windows / Linux)</span></li>
          <li><span>Bash Commands</span></li>
        </ul> */}
      </div>
    );
  }
}