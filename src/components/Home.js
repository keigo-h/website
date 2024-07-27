import { TheLinks } from "./Links";
import '../component-css/home.css'
import { useState, useEffect } from "react";


export const Home = () => { 
    return ( 
      <div>
        <Delayed delay={10}>
          <div className="link-fade">
            <TheLinks curLink='home'/>
          </div>
        </Delayed>
        <div className='home-outer-container'>
          <div className='home-container'>
          <Delayed delay={10}>
            <Title text="keigo hachisuka" delay={50} headerType='h1' identi='name'/>
          </Delayed>
          <Delayed delay={1000}>
              <Title text="software engineer" delay={50} headerType='h2' identi='position'/>
            </Delayed>
          </div>
        </div>
      </div>
    );
  }

const Delayed = ({delay, children}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show ? <>{children}</> : null;
}

const Title = ({text, delay, headerType, identi}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const Header = `${headerType}`

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <Header className={identi}>{currentText}</Header>
  );
}