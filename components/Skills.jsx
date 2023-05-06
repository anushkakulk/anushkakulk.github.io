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
    name: "ReactJS",
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
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-2">
          <h2 className="uppercase text-2xl tracking-widest text-[#68B0AB] lg:text-3xl">
            <ReactTypingEffect
              text="skills"
              eraseDelay={5000}
              eraseSpeed={100}
              typingDelay={1000}
            />
          </h2>
      

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
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
                  <div className="flex flex-col items-center text-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center lg:col-span-1">
            <p className="text-[#68B0AB] text-center mb-4 lg:mb-0">
              Other Languages, Tools, and Frameworks
            </p>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="justify-center items-center text-center">
                <p>SQL</p>
                <p>NodeJS</p>
                <p>Tailwind</p>
              </div>
              <div className="justify-center items-center text-center">
                <p>Docker</p>
                <p>LaTeX</p>
                <p>Microsoft Office</p>
              </div>
            </div>
            <p className="flex justify-center items-center text-center">
              Some great CS courses I've taken include Algorithms and Data,
              Object Oriented Design, Database Design, Foundations of
              Cybersecurity, Game Programming, Computer Systems, Artificial
              Intelligence, and Robotic Science and Systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
