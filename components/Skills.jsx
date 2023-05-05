import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import JavaLogo from "../public/assets/skills/java-logo.png";
import PythonLogo from "../public/assets/skills/python-logo-only.png";
import WebDevLogos from "../public/assets/skills/webdev-logos.png";
import ReactLogo from "../public/assets/skills/react-logo.webp";
import CPPLogo from "../public/assets/skills/c++logo.png";
import GithubLogo from "../public/assets/skills/github1.png";

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
    name: "HTML, CSS, JS, TS",
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
  const [isObserverInitialized, setIsObserverInitialized] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsElement = skillsRef.current;
    console.log(skillsElement); // check if skillsElement is returning a valid element
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );
  
    if (skillsElement) {
      skillsObserver.observe(skillsElement);
      setIsObserverInitialized(true);
    }
  
    return () => skillsObserver.disconnect();
  }, []);

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
      <h2 className="uppercase text-3xl tracking-wident text-[#68B0AB]">
            Skills
          </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-2 gap-8">
            {skillsList.slice(0, 3).map((skill, index) => (
              <div
                key={index}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
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
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
            {skillsList.slice(3, 6).map((skill, index) => (
              <div
                key={index}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
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
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1 flex flex-col justify-center items-center">
            <p className="text-[#68B0AB]">
              Other Languages, Tools, and Frameworks
            </p>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="justify-center items-center text-center">
                <p> SQL</p>
                <p>Node JS</p>
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
