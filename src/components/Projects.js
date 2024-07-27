import { TheLinks } from "./Links"
import '../component-css/projects.css'
import temp from '../img/temp-img.png'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export const Projects =  () => {

    const { curLoc } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [curLoc]);

    const firstProj = useRef(null);

    const scroll = () => {
      if (firstProj.current) {
        firstProj.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <div>
        <div className="proj-links">
          <TheLinks curLink='proj'/>
        </div>
        <div className="proj-outer-container">
          <div className="proj-container">
            <h1 className='proj' onClick={scroll}>projects</h1>
          </div>
          <div className="proj-icon" onClick={scroll}>
              <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="all-proj-wrapper" >
          <div ref={firstProj}>
            <Proj title="Image to Text Translation" />
          </div>
          <Proj title="Image to Text Translation" />
          <Proj title="Image to Text Translation" />
        </div>
      </div>
    )
  }

const Proj = ({title}) => {
  return (
    <div className="ind-proj-wrapper">
      <h2 className="proj-text">{title}</h2>
      <div className="proj-img-container">
        <img src={temp} className="proj-img"/>
        <img src={temp} className="proj-img"/>
      </div>
      <p className="proj-des">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at euismod ipsum. Suspendisse lorem felis, venenatis eu est eget, condimentum placerat eros. In vel eros sed metus dapibus porta. Donec tristique tortor sed metus hendrerit, non molestie magna imperdiet. Suspendisse vel leo magna. Aenean vel interdum sem. In ut risus eleifend, facilisis eros at, gravida ipsum. Quisque pellentesque risus ut urna eleifend, at vestibulum tellus pellentesque. Duis ornare enim sit amet ante finibus tincidunt. 
      </p>
      <p className="proj-lang">Python</p>
      <ProjLink/>
    </div>
  )
}

const ProjLink = ({link, type}) => {
  return (
    <a rel="noopener noreferrer" target="_blank" className="proj-link" href="https://github.com">code</a>
  )
}