import React from "react";
import "../../styles/standards.scss";
import "./skill-index.scss";
import { Link } from "react-router-dom";
import iconClose from '../../images/close.svg';

import iconHtml from '../../images/html5-plain.svg';
import iconCss from '../../images/css3-plain.svg';
import iconSass from '../../images/sass-original.svg';
import iconNpm from '../../images/npm-original-wordmark.svg';
import iconYarn from '../../images/yarn-original.svg';
import iconReact from '../../images/react-original.svg';
import iconNode from '../../images/nodejs-plain.svg';
import iconJavascript from '../../images/javascript-plain.svg';
import iconTypescript from '../../images/typescript-plain.svg';
import iconGit from '../../images/git-plain.svg';
import iconGithub from '../../images/github-original.svg';

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
        <Link to="/"><svg className="iconClose" enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" height="28px" width="28px"><polygon points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "/></svg></Link>
        <h1>Skills</h1>
        <ul>
          <li className="icon"><img src={iconHtml} alt="Html5 icon"/></li>
          <li className="icon"><img src={iconCss} alt="Css3 icon"/></li>
          <li className="icon"><img src={iconSass} alt="Sass icon"/></li>
          <li className="icon"><img src={iconJavascript} alt="Javascript icon"/></li>
          <li className="icon"><img src={iconTypescript} alt="Typescript icon"/></li>
          <li className="icon"><img src={iconReact} alt="React js icon"/></li>
          <li className="icon"><img src={iconNode} alt="Node js icon"/></li>
          <li className="icon"><img src={iconGit} alt="Git icon"/></li>
          <li className="icon"><img src={iconGithub} alt="Git hub icon"/></li>
          <li className="icon"><img src={iconNpm} alt="Npm icon"/></li>
          <li className="icon"><img src={iconYarn} alt="Yarn icon"/></li>
        </ul>       
      </div>
    );
  }
}