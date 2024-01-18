import Image from "next/image";
import React from "react";
import reversi from "../public/assets/projects/rev.gif";
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const firstgame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="contain"
          src={reversi}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Object Oriented Design - Reversi</h2>
          <h3>Java</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/Reversi</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
           While studying object oriented design practices, I developed a Java implementation of the popular board game Reversi/Othello on a hexagonal 
           board. I followed the Model View Controller paradigm, which allowed for loose coupling between components, efficient unit and 
           integration tests/debugging, and naturally, encapsulation. The hexagonal board was designed with Java Swing GUI components. 
           Overall the design resulted in a modular and maintanable system, allowing for extensibility (added multiple extra 
           features without changing existing code! like hints on the GUI view, new AI strategies, etc.) 
          </p>
          <p>
  The gameplay is designed to cater to various player types, supporting both human and AI players with distinct and customizable strategies. The codebase follows organization with packages structured around key interfaces such as model, view, controller, and player.
</p>
<ul className="py-2">
<p className="text-center py-2">Notable Patterns and Design Paradigms, complementing the MVC architecture, include:</p>
  <li>
    <strong>Strategy Pattern:</strong> Enables flexible, interchangeable, and composite algorithms for different AI player strategies.
  </li>
  <li>
    <strong>Observer Pattern:</strong> Facilitates communication between components, ensuring efficient updates.
  </li>
  <li>
    <strong>Delegate Pattern:</strong> Employs delegation for modular and reusable code structures.
  </li>
  <li>
    <strong>Factory Pattern:</strong> Parses Command Line Inputs to enhance player object creation.
  </li>
  <li>
    <strong>Adapter Pattern:</strong> Bridges incompatible interfaces, allowing for clean interaction.
  </li>
  <li>
    <strong>Decorator Pattern:</strong> Dynamically attaches additional responsibilities to objects (like adding a hint option to the view), promoting extensibility.
  </li>
</ul>
<p>
  This amalgamation of a well-structured MVC architecture, diverse player strategies, and an intuitive GUI demonstrates my ability to transform intricate concepts into cohesive and captivating software solutions. This project has not only enhanced my technical proficiency but has also inspired me to seek out more fun and meaningful endeavors to apply my classroom knowledge!
</p>


          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://github.com/anushkakulk/reversi"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl sm:h-[50%] shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Java
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Java Swing
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> JUnit
              </p>
            </div>
          </div>
        </div>
        <Link href="/projects">
          <p className="underline cursor-pointer py-5">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default firstgame;
