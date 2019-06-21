import React from "react";
import "../../styles/standards.scss";
import "./contact-index.scss";
import { Link } from "react-router-dom";

/** ICONS **/
// import iconClose from '../../images/close.svg';
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
        <Link to="/"><svg className="iconClose" enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" height="28px" width="28px"><polygon points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "/></svg></Link>
        <h1>Contact</h1>
        <p>
          Fell free to contact me. 
        </p>
        {/* <br /> */}
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
          <a href="https://github.com/itspoli" target="_blank" rel="noopener noreferrer"><img className="git icons" alt="Github link" src={github} /></a>
          <a href="https://www.linkedin.com/in/itspoli/" target="_blank" rel="noopener noreferrer"><img className="linkedin icons" alt="Linkedin link" src={linkedin} /></a>
          <a href="https://twitter.com/itspoli91" target="_blank" rel="noopener noreferrer"><img className="twitter icons" alt="Twitter link" src={twitter} /></a>
          <a href="https://www.facebook.com/itspoli91" target="_blank" rel="noopener noreferrer"><img className="facebook icons" alt="Facebook link" src={facebook} /></a>
        </div>
      </div>
    );
  }
}