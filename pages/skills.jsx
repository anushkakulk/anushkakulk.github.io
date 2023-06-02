import Image from "next/image";
import React from "react";
import { FaJava, FaPython, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import {BsGit} from "react-icons/bs"
import { SiCplusplus, SiScikitlearn, SiTensorflow, SiMysql } from "react-icons/si";
import ReactTypingEffect from "react-typing-effect";

const skillsList = [
  {
    name: "Java",
    logo: <FaJava size={30} />,
  },
  {
    name: "Python",
    logo: <FaPython size={30} />,
  },
  {
    name: "C++",
    logo: <SiCplusplus size={30} />,
  },
  
  {
    name: "Front-end",
    logos: [<IoLogoHtml5  />, <IoLogoCss3 />, <IoLogoJavascript/>],
  },
  {
    name: "React.js",
    logo: <FaReact size={30} />,
  },
  {
    name: "Git",
    logo: <BsGit size={30} />,
  },
  {
    name: "MySQL",
    logo: <SiMysql size={30} />,
  },
];

const Skills = () => {

  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16 xl:py-40">
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
        <div className="grid grid-cols-3 gap-2 my-8 skills-container skills-item">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="shadow-xl rounded-xl py-2 hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2  justify-center items-center">
                <div className="m-auto skills-container skills-item">
                  {skill.name === "Front-end"  || skill.name === "ML" ? (
                    <div className="flex flex-row justify-center items-center">
                      {skill.logos.map((logo, iconIndex) => (
                        <div key={iconIndex}>{logo}</div>
                      ))}
                    </div>
                  ) : (
                    <div>{skill.logo}</div>
                  )}
                </div>

                <div className="flex flex-col items-center text-center justify-center m-auto">
                  <h3 className="text-xs sm:text-lg py">{skill.name}</h3>
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
                <p>Docker</p>
                <p>Node.js</p>
                <p>Tailwind</p>
              </div>
              <div className="justify-center items-center text-center">
                <p>LaTeX</p>
                <p>Microsoft Office</p>
                <p>TensorFlow and scikit-learn</p>
              </div>
            </div>
          </div>
          <div className="text-justify m-auto">
            <p className="text-[#68B0AB] text-center text-lg ">
              Relevent Coursework
            </p>
            <div className="grid grid-cols-2  gap-6 py-4">
              <div className="justify-center items-center text-center">
                <p className="py-1">Algorithms and Data</p>
                <p className="py-1">Object Oriented Design</p>
                <p className="py-1">Programming in C++</p>
              </div>
              <div className="justify-center items-center text-center">
                <p className="py-1">Database Design</p>
                <p className="py-1">Foundations of Cybersecurity</p>
                {/* <p className="py-1">Artificial Intelligence</p>
                <p className="py-1">Robotic Science and Systems</p>
                <p className="py-1">Computer Systems</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
