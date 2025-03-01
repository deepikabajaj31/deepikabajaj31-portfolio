import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "My Self", id: "my-self" },
    { title: "Experience", id: "experience" },
    { title: "My Work", id: "my-work" },
    { title: "Reviews", id: "reviews" },
    { title: "Certifications", id: "certifications" },
    { title: "Contact", id: "contact" },
  ],
  rightBtn: {
    label: "Resume | CV",
    onClick: () => openLink("assets/cv.pdf"),
  },
  logo: {
    src: "/assets/profile.jpeg",
    alt: "deepikabajaj31",
  },
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
