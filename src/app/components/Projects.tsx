import React from "react";
import Card from "./Card";

const projectsData = [
  {
    title: "DriveLoop App",
    imageSource: "/assets/slide7.jpg",
    description:
      "The DriveLoop app was created to provide a platform for users (renters) and car owners to manage and rent a variety of vehicles. Car owners can list their vehicles, track bookings, and monitor earnings, while users can search for and rent cars easily.",
    demoLink: "https://driveloop.vercel.app",
    githubLink: "https://github.com/edithdimboiu/driveloop.git",
    caseStudyLink: "/driveLoop",
  },
  {
    title: "Personal Library",
    imageSource: "/assets/slide1.jpg",
    description:
      "The MyLibrary app is designed for readers who want to track their reading habits and enjoy detailed statistics about their collections. Readers can mark books as read or unread, with the app generating insightful statistics.",
    demoLink: "https://personal-library.edith.info",
    githubLink: "https://github.com/edithdimboiu/PersonalLibrary.git",
    caseStudyLink: "/personal-library",
  },
  {
    title: "Portfolio",
    imageSource: "/assets/slide5.jpg",
    description:
      "This project is my portfolio project, created to showcase my skills and projects as a frontend developer. It demonstrates responsive design principles and modern frontend development techniques.",
    demoLink: "https://edith.info",
    githubLink: "https://github.com/edithdimboiu/portfolio.git",
    caseStudyLink: "/portfolio",
  },
];

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <Card
          key={project.title}
          title={project.title}
          imageSource={project.imageSource}
          description={project.description}
          demoLink={project.demoLink}
          githubLink={project.githubLink}
          caseStudyLink={project.caseStudyLink}
        />
      ))}
    </>
  );
};

export default Projects;
