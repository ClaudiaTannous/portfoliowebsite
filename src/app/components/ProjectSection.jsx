"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Winery Desktop App",
    description:
      "A desktop application designed to streamline daily operations for a winery business. Built using Java with a Microsoft Access database backend, the system enables staff to manage inventory, track production processes, and handle customer orders efficiently , to use it the user should downlaod the jar file.",
    image: "/images/projects/App.jpg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/ClaudiaTannous/Winery-Management-DesktopApp.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Smart News Recommender",
    description:
      "Smart News Recommender is a dynamic web application that delivers relevant news articles to users based on keyword-based search queries and category selection. The application integrates synonym expansion, keyword filtering, Redis caching, and a clean frontend interface to provide a fast and consistent user experience. It is fully containerized with Docker and deployed using Google Cloud Run.",
    image: "/images/projects/news.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ClaudiaTannous/smart-news-recommender.git",
    previewUrl:
      "https://smart-news-recommender-645660361118.me-west1.run.app/recommend-news-page?category=technology",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
