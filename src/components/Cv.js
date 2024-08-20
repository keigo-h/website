import { TheLinks } from "./Links";
import "../component-css/cv.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const Cv = () => {
  const { curLoc } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curLoc]);

  const topExp = useRef(null);

  const scroll = () => {
    if (topExp.current) {
      topExp.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div>
      <div className="cv-links">
        <TheLinks curLink="cv" />
      </div>
      <div className="cv-outer-container">
        <div className="cv-container">
          <h1 className="cv" onClick={scroll}>
            CV
          </h1>
        </div>
        <div className="cv-icon" onClick={scroll}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div ref={topExp} className="all-exp-wrapper">
        <h2 className="cv-sub">experience</h2>
        <Exp
          title="Hurdlr"
          date={"August 2024-Present"}
          position={"Software Engineer"}
        />
        <Exp
          title="Proofpoint"
          date={"May 2023-August 2023"}
          position={"Software Engineer Intern"}
        />
        <Exp
          title="Lawrence Livermore National Lab"
          date={"June 2022-August 2022"}
          position={"Cybertoaster Intern"}
        />
        <h2 className="cv-sub">education</h2>
        <Exp
          title="Brown University"
          date={"2020-2024"}
          position={"BS Computer Science, BA Applied Mathematics"}
        />
      </div>
    </div>
  );
};

const Exp = ({ title, date, position }) => {
  return (
    <div className="ind-exp-wrapper">
      <div className="cv-title-wrapper">
        <h3 className="cv-text">{title}</h3>
        <span className="cv-date">{date}</span>
      </div>
      <p className="cv-des">{position}</p>
    </div>
  );
};
