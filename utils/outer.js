import { openLink } from "./methods";

const outer = {
  title1: `G'day, I'm`,
  title2: "Deepika Bajaj,",
  decrypTexts: [
    "A Software Engineer",
    "A Full Stack Developer",
    "I build things for the web",
    "A Web3 Developer",
    "A Traveler",
  ],
  desciption: `A passionate Software Engineer skilled in Java, JavaScript, and React, with experience in building scalable web applications and reusable components. Eager to learn and adapt to new technologies for optimized solutions.`,
  button: {
    label: "Contact me!",
    onClick: () => openLink("mailto:deepikabajaj31@gmail.com?subject=Hello"),
  },
};

export default outer;
