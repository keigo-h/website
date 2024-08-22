import { Link, Route, Routes, HashRouter } from "react-router-dom";
import "../component-css/links.css";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Cv } from "./Cv";

export const TheLinks = ({ curLink }) => {
  return (
    <div className="links-container">
      <Link
        className="link"
        style={curLink === "home" ? { pointerEvents: "none" } : null}
        to={"/"}
      >
        home
      </Link>
      <Link
        className="link"
        style={curLink === "about" ? { pointerEvents: "none" } : null}
        to={"../about"}
      >
        about
      </Link>
      <Link
        className="link"
        style={curLink === "proj" ? { pointerEvents: "none" } : null}
        to={"../projects"}
      >
        projects
      </Link>
      <Link
        className="link"
        style={curLink === "cv" ? { pointerEvents: "none" } : null}
        to={"../cv"}
      >
        cv
      </Link>
    </div>
  );
};

export const InternalLinks = () => {
  return (
    <HashRouter base="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<Cv />} />
      </Routes>
    </HashRouter>
  );
};
