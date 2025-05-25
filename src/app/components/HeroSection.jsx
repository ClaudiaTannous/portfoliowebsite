"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Claudia",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Future-ready Information Systems student",
                1000,
                "Building smart, data-driven solutions",
                1000,
                "Driven to learn. Ready to lead.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I’m Claudia — a curious mind driven by creativity,
            problem-solving, and a love for building meaningful things. I’m
            always exploring, learning, and growing.
          </p>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
