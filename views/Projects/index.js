import React from "react";
import WindowScreen from "../../components/WindowScreen";
import HoverImage from "../../components/HoverImage";
import ViewsTitle from "../../components/ViewsTitle";
import Github from "../../components/SVGs/GitHub/index";
import { openLink } from "../../utils/methods";

const WindowImage = ({ src }) => (
  <HoverImage showFilter imageClassName="ai-image" src={src} />
);

const getSide = (index) => (index % 2 ? "left" : "right");

const SingleProject = (props) => {
  const { image, index, link, githubLink } = props;
  const side = getSide(index);
  return (
    <div className="ai-projects-single">
      <div className="row">
        <div className="col-6 d-none d-lg-block">
          <div className="">
            <WindowScreen
              containerClassName={`ai-projects-image-container ai-projects-image-container-${side}`}
            >
              {link ? (
                <a href={link} target="_blank">
                  <WindowImage src={image} />
                </a>
              ) : (
                <WindowImage src={image} />
              )}
            </WindowScreen>
          </div>
        </div>
        <div
          className={`col-12 col-lg-6 d-flex align-items-center ${
            side === "right" ? "order-first" : ""
          }`}
        >
          <ProjectTextSide {...props} />
        </div>
      </div>
    </div>
  );
};

const ProjectTextSide = (props) => {
  const { label, title, description, techs, index, image, githubLink } = props;
  const side = getSide(index);
  return (
    <div
      data-aos={`fade-down-${side}`}
      className={`ai-projects-text-side ai-projects-text-side-${side}`}
    >
      <div data-aos={`zoom-in-${side}`} className="ai-projects-text-featured">
        {label}
      </div>
      <div
        data-aos={`zoom-in-${side}`}
        className="ai-projects-text-title"
        style={{ display: "flex" }}
      >
        <span style={{ marginRight: "1rem" }}>{title}</span>
        <Github onClick={() => openLink(githubLink)} width={24} />
      </div>
      <div
        data-aos={`zoom-in-${side}`}
        className="ai-projects-text-description"
      >
        {description}
        <div className="mt-4 d-block d-lg-none">
          <WindowScreen containerClassName={`ai-text-image-container`}>
            <WindowImage src={image} />
          </WindowScreen>
        </div>
      </div>
      <div data-aos={`zoom-in-${side}`} className="ai-projects-text-tecs">
        {techs.map(
          (tech, i) => `${tech} ${techs.length - 1 !== i ? " | " : ""}`
        )}
      </div>
    </div>
  );
};

const Projects = ({ data: { heading, list } }) => {
  return (
    <div className="ai-projects">
      <div className="container">
        <div className="ai-projects-container">
          <ViewsTitle text={heading} />
          <div className="row justify-content-center">
            {(list || []).map((project, i) => (
              <SingleProject key={i} index={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
