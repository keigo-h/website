import { TheLinks } from "./Links"
import '../component-css/about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import personal from '../img/personal.png'

export const About = () => {
    return (
      <div>
        <div className='about-links'>
          <TheLinks curLink='about'/>
        </div>
        <div className="about-outer-container">
          <div className="about-container">
              <h1 className='about-me'>about me</h1>
              <div className="text-img">
              <p className="about-me-text">Recent graduate from Brown University with a degree in Computer Science and Applied Mathematics, seeking to advance skills in software engineering. Proficient in Java, Python, and C. Continuously working on enhancing problem-solving abilities applicable within and beyond software engineering.</p>
              <img className="my-img" src={personal} width="200" height="300" alt="personal"/>
              </div>
            <div className="icons">
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/keigo-hachisuka-a91523188/"><FontAwesomeIcon  className="icon" icon={faLinkedin} /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/keigo-h"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
              <a href="mailto:keigo.hachisuka01@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }