import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import JavaLogo from "../public/assets/skills/java-logo.png";
import PythonLogo from "../public/assets/skills/python-logo-only.png";
import WebDevLogos from "../public/assets/skills/revised-webdev.png";
import ReactLogo from "../public/assets/skills/react-logo.webp";
import CPPLogo from "../public/assets/skills/c++logo.png";
import GithubLogo from "../public/assets/skills/github1.png";
import ReactTypingEffect from "react-typing-effect";

const skillsList = [
  {
    name: "Java",
    logo: JavaLogo,
    alt: "Java logo",
  },
  {
    name: "Python",
    logo: PythonLogo,
    alt: "Python logo",
  },
  {
    name: "Front-End",
    logo: WebDevLogos,
    alt: "Web development logos",
  },
  {
    name: "React",
    logo: ReactLogo,
    alt: "React logo",
  },
  {
    name: "C++",
    logo: CPPLogo,
    alt: "C++ logo",
  },
  {
    name: "Github",
    logo: GithubLogo,
    alt: "Github logo",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full h-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="w-full">
          <h2 className="uppercase text-2xl tracking-widest text-[#68B0AB] lg:text-3xl text-center py-5">
            <ReactTypingEffect
              text="skills"
              eraseDelay={5000}
              eraseSpeed={100}
              typingDelay={1000}
            />
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 my-8">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="shadow-xl rounded-xl py-2 hover:scale-105 ease-in  duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.logo}
                    width={64}
                    height={64}
                    alt={skill.alt}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center m-auto">
                  <h3 className="text-xs sm:text-xl">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="text-center lg:text-left">
            <p className="text-[#68B0AB] text-center text-lg mb-4">
              Other Languages, Tools, and Frameworks
            </p>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="justify-center items-center text-center">
                <p>MySQL</p>
                <p>NodeJS</p>
                <p>Tailwind</p>
            
              </div>
              <div className="justify-center items-center text-center">
                <p>Docker</p>
                <p>LaTeX</p>
                <p>Microsoft Office</p>
              </div>
            </div>
          </div>
          <div className="text-justify m-auto">
            <p className="text-[#68B0AB] text-center text-lg ">
              Relavent Coursework
            </p>
            <div className="grid grid-cols-2  gap-6 py-4">
              <div className="justify-center items-center text-center">
                <p className="py-1">Algorithms and Data</p>
                <p className="py-1">Object Oriented Design</p>
                <p className="py-1">Foundations of Cybersecurity</p>
                <p className="py-1">Programming in C++</p>
              </div>
              <div className="justify-center items-center text-center">
              <p className="py-1">Database Design</p>
              <p className="py-1">Artificial Intelligence</p>
              <p className="py-1">Robotic Science and Systems</p>
              <p className="py-1">Computer Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
