import React from "react";
import Card from "../components/Card";

const Projects = () => {
  return (
    <>
      <Card
        title="Personal Library"
        imageSource="/assets/slide1.jpg"
        description="The MyLibrary app is designed for readers who want to track their reading habits and enjoy detailed statistics about their collections.
      Readers can mark books as read or unread, with the app generating insightful statistics."
        demoLink="https://personal-library.edith.info"
        caseStudyLink="/personal-library"
      />
      <Card
        title="Portfolio"
        imageSource="/assets/slide5.jpg"
        description="This project is my portfolio project, created to showcase my skills and projects as a frontend developer. It demonstrates responsive design principles and modern frontend development techniques."
        demoLink="https://edith.info"
        caseStudyLink="/portfolio"
      />
    </>
  );
};
export default Projects;
