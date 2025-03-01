import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/deepikabajaj31",
    instagram: "https://www.instagram.com/deepikabajaj31/",
    leetcode: "https://leetcode.com/u/deepikabajaj31",
    linkedin: "https://www.linkedin.com/in/deepikabajaj31/",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "deepikabajaj31@gmail.com",
    onClick: () => openLink("mailto:deepikabajaj31@gmail.com?subject=Hello"),
  },
  handleIconClick,
};

export default sideElements;
