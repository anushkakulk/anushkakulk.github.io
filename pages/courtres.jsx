import Image from "next/image";
import React from "react";
import courtUML from "../public/assets/projects/courtUML.png";
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const courtres = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="contain"
          src={courtUML}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Court Reservation System</h2>
          <h3>C++</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/Court-Reservations</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
            I spearheaded a dynamic project to develop an efficient tennis court
            reservation system in C++, in collaboration with a dedicated team.
            Guided by the SOLID and YAGNI principles, we meticulously designed
            the system to cater to three distinct user types: members, coaches,
            and officers. This diversity in user roles ensured tailored
            accessibility to reservation functionalities. Additionally, our
            unwavering commitment to data preservation guarantees the long-term
            reliability of the system.
          </p>
          <p className="py-2 ">
            This project allowed me to learn how to efficiently design larger
            programs in C++ while ensuring safe memory allocation and
            deallocation. In addition, I gained more experience navigating work with a team of other developers. 
          </p>
          <p className="py-2 "></p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://docs.google.com/document/d/1OeHY6JSU-HJZiYxrMapPKdECUSYlFLojbJF_8BjActU/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FiExternalLink />
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
                <BsArrowRight className="pr-1" /> C++
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

export default courtres;
