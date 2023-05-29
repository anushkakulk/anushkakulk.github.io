import Image from "next/image";
import React from "react";
import multipleImg from "../public/assets/projects/multiPL-E.png";
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import Link from "next/link";

const research = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={multipleImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MultiPL-E Objective C Translator</h2>
          <h3>Python / Objective C / Artificial Intelligence</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/MultiPL-E</p>
          <h2 className="py-2">Overview</h2>
          <p>
            MultiPL-E is a multi-programming language benchmark for evaluating
            the performance of code LLMs and is part of an initative headed by
            Northeastern to work on the BigCode project, an open scientific
            collaboration working on the responsible development of large
            language models for code. I co-developed an Objective-C translator
            to extend evaluation metric for MultiPL-E. I really valued this
            experience, as it was my first research opportunity and it
            solidified my aspiration to work with Artificial Intelligence!
          </p>

          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://github.com/anushkakulk/MultiPL-E"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
              <a
                href="https://nuprl.github.io/MultiPL-E/"
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
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Jupyter Notebook
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Objective-C
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Clang Compiler
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

export default research;
