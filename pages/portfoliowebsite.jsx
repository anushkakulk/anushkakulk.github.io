import Image from "next/image";
import React from "react";
import webImg from "../public/assets/covers/thisone.png";
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { TbSourceCode } from "react-icons/tb";
import Link from "next/link";

const portfoliowebsite = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={webImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio Website</h2>
          <h3>Next.js / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/Portfolio-Site</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
            While taking online classes during the summer, I decided to use my
            free time to work on developing a website of my own. I have had
            limited experience with React and Node.js in high school but have
            never actually deployed a web app into production.
          </p>
          <p className="py-2 ">
            For this site, I decided to use Next.js and Tailwind CSS, as I had
            seen some beautiful web apps created with a
            Next.js/Tailwind/Firebase stack. As a music enthusiast, I wanted to
            add a personal touch by showcasing my Spotify listening history
            without requiring that users sign in to their own account. However,
            I faced a few challenges when integrating the Spotify API, since
            this was my first time working with APIs. Despite the initial
            difficulties, I successfully managed to make API calls, using
            authorization code flow, allowing me to display my Spotify metadata
            without compromising user experience!
          </p>
          <p className="py-2 ">
            The responsive design was also a challenge, as I really wanted the
            site to render nicely on mobile. Luckily, Tailwind was the perfect
            tool for the job. As someone with not a lot of web dev experience, I
            learned a lot throughout this whole process. Working with the API
            has inspired me to take up some more projects tailored to my
            interests in music and machine learning, and I'm hoping to deploy a
            full-stack application in the future.
          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://github.com/anushkakulk/personal-website"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FiExternalLink />
                </div>
              </a>
              <a
                href="https://developer.spotify.com/documentation/web-api/tutorials/code-flow"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <TbSourceCode />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl sm:h-[70%] shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Spotify Web API
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

export default portfoliowebsite;
