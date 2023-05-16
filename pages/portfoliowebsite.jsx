import Image from "next/image";
import React from "react";
import webImg from "../public/assets/covers/thisone.png";

import { RiRadioButtonFill } from "react-icons/ri";
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
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
            While taking online classes during the summer, I decided to use my
            free time to work on developing a website of my own. I have had
            limited experience with React and Node.js in high school but haven't
            never actually deployed a web app into production
          </p>
          <p className="py-2 ">
            For this site, I used Next.js for server-side rendering and Tailwind
            CSS for styling. As a music lover, I really wanted to showcase my
            Spotify listening history for a personal flair without requiring
            that a user login to their own account just to view my metadata. As
            I had no experience with API integration prior, the process was
            quite tough and I had trouble with bypassing the authorization
            workflow (OAuth2). After lots of trial and error, I was able to
            succesfully make API calls!
          </p>
          <p className="py-2 ">
            The responsive design was also a challenge, as I really wanted this
            to render nicely on mobile. Luckily, Tailwind was the perfect tool
            for the job. As someone with not a lot of web dev experience, I
            learned a lot throughout this whole process. Working with the API
            has inspired me to take up some more projects tailored to my
            interests in music and machine learning, and I'm hoping to
            successfully deploy a full-stack application in the future!
          </p>
          <a
            href="https://github.com/anushkakulk/personal-website"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="/lol" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl sm:h-[70%] shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React/Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spotify Web API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer py-5">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default portfoliowebsite;
