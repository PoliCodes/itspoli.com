import React from "react";
import "../../styles/standards.scss";
import "./contact-index.scss";
import { Link } from "react-router-dom";

/** ICONS **/
import iconClose from '../../images/close.svg';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';

interface State {
  loaded: boolean;
}
interface Props {
  name?: string;
}

export class ContactIndex extends React.Component<Props, State> {

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
      <div className={`contact content ${this.state.loaded ? "loaded" : "loading"}`}>
        <h1>Contact<Link to="/"><img className="icons" src={iconClose} alt="close" /></Link></h1>
        {/* <h1>Contact<Link to="/"><svg className="icons" version="1.1" viewBox="0 0 512 512"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg></Link></h1> */}
        <p>
          Fell free to send me a message. Here is my contact:
        </p>
        <br />
        <p>Email: poli@itspoli.com</p>
        <p>Phone: (604) 704-6404</p>
        <br />

        <form action="https://formspree.io/poli@itspoli.com" method="POST">
          <input type="text" required name="name" placeholder="Name" />
          <input type="email" required name="_replyto" placeholder="Email" />
          <textarea rows={8} name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
        <div className="social">
          <a href="http://"><img className="git icons" alt="Github link" src={github} /></a>
          <a href="http://"><img className="linkedin icons" alt="Linkedin link" src={linkedin} /></a>
          <a href="http://"><img className="twitter icons" alt="Twitter link" src={twitter} /></a>
          <a href="http://"><img className="facebook icons" alt="Facebook link" src={facebook} /></a>
        </div>
      </div>
    );
  }
}