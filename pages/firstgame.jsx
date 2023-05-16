import Image from "next/image";
import React from "react";
import stonksImg from "../public/assets/projects/stonks.gif";

import { RiRadioButtonFill } from "react-icons/ri";
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
          src={stonksImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CSW Software Engineering Platformer Game</h2>
          <h3>Unity / C#</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
            In 2020, as part of the Software Engineering course offered by my
            high school, I worked in a team of 4 to develop a simple platformer
            game in Unity. The course was my first introduction to collaborative
            coding, and encouraged us to use practices like Scrum and Agile
            workflow frameworks to mimic actual product delivery as software
            developers. I was nominated to be Scrum Master for my team and got
            to lead weekly deliberation meetings to go over our progress.
            Overall, the experience was very fulfilling, as I learned a lot of
            game development skills (like game physics, debugging practices, and
            a working C#/Unity proficiency) while getting a taste for the
            software development process!
          </p>
          <p className="py-2 ">
            I implemented the parallax auto scrolling, obstacles (holes, spikes,
            random bullets), random enemy spawner, player health system, sfx,
            score system, and user functional interaction (ex: menu, pause, game
            over).
          </p>
          <p className="py-2 ">
            I do wish I saved the video showcasing the final demo, as the video
            shown on this site is a small clip taken towards the beginning of the
            project (which may be evident based on the <i>interesting...</i>{" "}
            game physics :0 )
          </p>
          <a
            href="https://github.com/anushkakulk/demo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl sm:h-[50%] shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Unity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> C#
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

export default firstgame;
