import { Link, Route, Routes, HashRouter } from 'react-router-dom';
import '../component-css/links.css'
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Cv } from './Cv';


export const TheLinks = ({curLink}) => {
    return (
      <div className='links-container'>
        {curLink === 'home' ? null : <Link className='link' to={'/'} >home</Link>}
        {curLink === 'about' ? null : <Link className='link' to={'../about'}>about</Link>}
        {curLink === 'proj' ? null : <Link className='link' to={'../projects'}>projects</Link>}
        {curLink === 'cv' ? null : <Link className='link' to={'../cv'}>cv</Link>}
      </div>
    )
  }
  
  export const InternalLinks = () => {
    return (
      <HashRouter base='/'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='about' element={<About/>}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='cv' element={<Cv />}/>
          </Routes>
        </HashRouter>
    )
  }
