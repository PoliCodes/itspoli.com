import React from 'react';
import './styles/app.scss';
import Menu from './views/components/menu';
import { Route, Link } from 'react-router-dom';
import { AboutIndex } from './views/about/about-index';
import { SkillsIndex } from './views/skills/skills-index';
import { ContactIndex } from './views/contact/contact-index';
import logo from "./images/logo.png";


const App: React.FC = () => {
  return (
    <div className="app">
      <nav className="home">
        <Link to="/"><img className="logo1" alt="Logo" src={logo} /></Link>
        <Menu></Menu>
      </nav>

      {/* Links routes */}
      <Route path="/about-me" exact component={AboutIndex} />
      <Route path="/skills" exact component={SkillsIndex} />
      <Route path="/contact" exact component={ContactIndex} />

    </div>
  );
}

export default App;
