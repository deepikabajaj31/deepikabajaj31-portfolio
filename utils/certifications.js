import { openLink } from "./methods";

const certifications = {
  heading: `Licenses & certifications`,
  list: [
    {
      size: 1,
      title: "SQL using MySQL and Database Design",
      platform: "Udemy | Tim Buchalka",
      link: "https://www.udemy.com/certificate/UC-0d49c68b-26c0-462b-bc6e-d12c8b03de8f/",
      date: "Issued Dec 2023 · No Expiration Date",
      logo: "/assets/sql.png",
      aos: "zoom-out-left",
    },
    {
      size: 2,
      title: "The complete Java Development Bootcamp",
      platform: "Udemy | Rayan Slim, Jad Slim, Amer Abdulkader",
      link: "https://www.udemy.com/certificate/UC-c6973be5-46fc-4373-8d28-0b8190a28711/",
      date: "Issued Dec 2023 · No Expiration Date",
      logo: "/assets/java.webp",
      aos: "zoom-out-right",
    },
    {
      size: 3,
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      platform: "Udemy | Maximilian Schwarzmüller",
      link: "https://www.udemy.com/certificate/UC-6e1efab8-e320-4cba-8623-5cbea796cf50/",
      date: "Issued Oct 2022 · No Expiration Date",
      logo: "/assets/react.svg",
      aos: "zoom-out-left",
    },
  ],
  handleIconClick: openLink,
};

export default certifications;
