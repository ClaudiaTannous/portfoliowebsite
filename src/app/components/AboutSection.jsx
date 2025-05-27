"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Languages C, Python, Java, JavaScript, SQL</li>
        <li>Web Development HTML5, CSS</li>
        <li>Backend & Databases Microsoft SQL Server</li>
        <li>
          Tools & Technologies Git & GitHub, VS Code, FastAPI, Docker, Linux
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Sc. in Information Systems University of Haifa Current, 2nd year
          student Focus: Software & Systems Development, Databases, Web
          Technologies, AI & Machine Learning Track
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded full"
          src="/images/about.jpg"
          alt="mu image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a second-year Information Systems student at the University of
            Haifa with hands-on experience in software development, including
            real-world use of C for systems-level tasks and academic projects.
            I’ve worked on full-stack and automation tools using Python, Java,
            SQL Server, and Git, and have built functional, maintainable code in
            both high-level and low-level environments. My recent focus includes
            learning more about real-time systems and Linux development, with an
            interest in roles that bridge software and hardware. I’m passionate
            about solving meaningful problems and continuously growing through
            practical, impactful work.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
