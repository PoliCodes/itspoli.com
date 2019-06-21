import React from "react";
import "../../styles/standards.scss";
import "./contact-index.scss";
import { Link } from "react-router-dom";

/** ICONS **/
// import facebook from '../../images/facebook.svg';
// import github from '../../images/github.svg';
// import linkedin from '../../images/linkedin.svg';
// import twitter from '../../images/twitter.svg';

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
        <Link to="/"><svg className="iconClose" enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" height="28px" width="28px"><polygon points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 " /></svg></Link>
        <h1>Contact</h1>
        <p>
          Fell free to contact me.
        </p>
        {/* <br /> */}
        <div className="contact-p">
          <p>Email: poli@itspoli.com</p>
          <p>Phone: (604) 704-6404</p>
        </div>
        <br />

        <form action="https://formspree.io/poli@itspoli.com" method="POST">
          <input type="text" required name="name" placeholder="Name" />
          <input type="email" required name="_replyto" placeholder="Email" />
          <textarea rows={8} name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
        <div className="social">
          {/* <a href="https://github.com/itspoli" target="_blank" rel="noopener noreferrer"><img className="git icons" alt="Github link" src={github} /></a> */}
          {/* <a href="https://www.linkedin.com/in/itspoli/" target="_blank" rel="noopener noreferrer"><img className="linkedin icons" alt="Linkedin link" src={linkedin} /></a> */}
          {/* <a href="https://twitter.com/itspoli91" target="_blank" rel="noopener noreferrer"><img className="twitter icons" alt="Twitter link" src={twitter} /></a>
          <a href="https://www.facebook.com/itspoli91" target="_blank" rel="noopener noreferrer"><img className="facebook icons" alt="Facebook link" src={facebook} /></a> */}
          <a href="https://github.com/itspoli" target="_blank" rel="noopener noreferrer"><svg className="icons" viewBox="0 0 67 67"><path d="M20.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.514c-0.654,0.488-1.44,1.414-1.549,2.484c-0.823,0.523-2.478,0.696-3.764,0.297  c-1.803-0.559-2.493-4.066-5.192-3.566c-0.584,0.107-0.468,0.486,0.037,0.809c0.823,0.523,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.981,4.473,2.981c1.21,0,2.058-0.143,2.058-0.143s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.233,0.557,0.255,1.004,0.255c0.884,0,2.723-0.725,2.723-1.998c0-1.011,0.017-4.41,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.94-0.169,7.872c-0.302,1.094-0.847,0.939-0.847,1.427c0,0.726,2.214,0.179,2.948-1.416c0.567-1.239,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.123,3.342,0.769,4.222c0.586,0.579,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.119  c0.645,0.223,2.025,0.283,2.09-0.09c0.065-0.373-1.662-0.928-1.678-2.084c-0.01-0.707,0.032-1.119,0.032-4.187  c0-3.068-0.419-4.202-1.88-5.106c4.508-0.455,7.299-1.551,8.658-4.486c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.971c-0.008-4.21-2.058-5.699-2.451-6.398c0.58-3.187-0.098-4.637-0.412-5.135  c-1.162-0.406-4.041,1.045-5.615,2.067c-2.564-0.737-7.986-0.666-10.019,0.19c-3.751-2.639-5.736-2.235-5.736-2.235  s-1.283,2.259-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C19.906,31.83,20.102,33.292,20.543,34.568z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z" /></svg></a>
          <a href="https://www.linkedin.com/in/itspoli/" target="_blank" rel="noopener noreferrer"><svg className="icons" viewBox="0 0 67 67"><path d="M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z" /></svg></a>
          <a href="https://twitter.com/itspoli91" target="_blank" rel="noopener noreferrer"><svg className="icons" viewBox="0 0 67 67"><path d="M38.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.567  C20.775,43.256,20,43.341,20,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" /></svg></a>
          <a href="https://www.facebook.com/itspoli91" target="_blank" rel="noopener noreferrer"><svg className="icons" viewBox="0 0 67 67"><path d="M28.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M33,64C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z" /></svg></a>
        </div>
      </div>
    );
  }
}