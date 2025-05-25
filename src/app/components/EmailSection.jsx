"use client";

import React from "react";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="my-12 md:my-12 py-24 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <a
            href="https://github.com/ClaudiaTannous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300 cursor-pointer rounded-lg bg-white/10 p-3 flex items-center justify-center"
          >
            <Image
              src={GithubIcon}
              alt="Github Icon"
              width={30}
              height={30}
              className="object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/claudia-tannous-0471b32bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300 cursor-pointer rounded-lg bg-white/10 p-3 flex items-center justify-center"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={30}
              height={30}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
