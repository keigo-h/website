import { TheLinks } from "./Links";
import "../component-css/projects.css";
import temp from "../img/temp-img.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const Projects = () => {
  const { curLoc } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curLoc]);

  const firstProj = useRef(null);

  const scroll = () => {
    if (firstProj.current) {
      firstProj.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div>
      <div className="proj-links">
        <TheLinks curLink="proj" />
      </div>
      <div className="proj-outer-container">
        <div className="proj-container">
          <h1 className="proj" onClick={scroll}>
            projects
          </h1>
        </div>
        <div className="proj-icon" onClick={scroll}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="all-proj-wrapper">
        <div ref={firstProj}>
          <Proj
            title={"this website"}
            proj_text={
              "enjoy!"
            }
            langs={["HTML", "CSS", "JS", "React"]}
            link={"https://github.com/keigo-h/keigoh_website"}
            type={"code"}
            date={"August 2024"}
          />
        </div>
        <Proj
            title={"Image to Text Translation"}
            proj_text={
              "CNN, RNN, CTC model which extracts text from an image with the goal of translation."
            }
            langs={["Python", "Keras"]}
            link={"https://github.com/keigo-h/CV_Final"}
            type={"code"}
            date={"April 2024"}
          />
        <Proj
          title={"IP/TCP"}
          proj_text={
            "Implemented a Virtual IP network in Go, simulating the IP stack API, IP forwarding, and RIP routing over UDP. Additionally, built a TCP layer with connection setup/teardown, state management, and developed the Sliding Window Protocol with Zero Window Probing to enable the transmission of 1MB files."
          }
          langs={["Go"]}
          link={"https://brown-csci1680.github.io/iptcp-docs/"}
          type={"project details"}
          date={"November 2023"}
        />
        <Proj
          title={"Weenix OS"}
          proj_text={
            "Built a Unix-based operating system kernel in C, featuring processes, threads, synchronization primitives, and device drivers for terminal, disk, and memory. Implemented the System V File System (S5FS) along with a virtual file system for a unified interface, and engineered virtual memory capabilities to manage user-level code and handle system calls."
          }
          langs={["C"]}
          link={"https://github.com/brown-cs1690/handout/wiki"}
          type={"project details"}
          date={"April 2023"}
        />
        <Proj
          title={"Lives of Plants"}
          proj_text={
            "Utilized TensorFlow to implement a Conv2D model for identifying and labeling plants, trained on 10 species using an Adam optimizer and Categorical Cross Entropy Loss. Achieved a training accuracy of 73.21% and a validation accuracy of 71.25%."
          }
          langs={["Python", "Tensorflow"]}
          link={"https://github.com/keigo-h/Lives-of-Plants"}
          type={"code"}
          date={"December 2022"}
        />
        <Proj
          title={"Study Buddies"}
          proj_text={
            "Designed and developed software to match students with potential study partners, managing backend responsibilities with a partner matching algorithm in Java and data storage in MongoDB. Adapted data for smooth integration into the frontend and database, minimizing the need for additional data manipulation."
          }
          langs={["Java", "MongoDB"]}
          link={"https://github.com/keigo-h/StudyBuddies/tree/master/StudyBuddies"}
          type={"code"}
          date={"May 2022"}
        />
        <Proj 
          title={"F1 betting website"}
          proj_text={"it sucks. but it's my first project"}
          langs={["HTML", "CSS", "JS", "React", "SQL"]}
          type={"code"}
          date={"December 2020"}
        />
      </div>
    </div>
  );
};

const Langs = ({ lang_list }) => {
  return (
    <div className="langs-container">
      {lang_list.map((word, index) => (
        <span key={index}>
          {word}
          {index < lang_list.length - 1 && ","}{" "}
        </span>
      ))}
    </div>
  );
};

const Proj = ({ title, proj_text, langs, link, type, date }) => {
  return (
    <div className="ind-proj-wrapper">
      <div className="proj-title-wrapper">
        <h2 className="proj-text">{title}</h2>
        <span className="proj-date">{date}</span>
      </div>
      <p className="proj-des">{proj_text}</p>
      <Langs lang_list={langs} />
      <ProjLink link={link} type={type} />
    </div>
  );
};

const ProjLink = ({ link, type }) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="proj-link"
      href={link}
    >
      {type}
    </a>
  );
};
