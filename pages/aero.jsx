import Image from "next/image";
import React from "react";
import aeroImg from "../public/assets/projects/revised-aero.png";

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
          src={aeroImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">AerospaceNU Engine Control Software</h2>
          <h3>C++</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/AeroNU</p>
          <h2 className="py-2">Overview</h2>
          <p>
            AerospaceNU is Northeastern University's collegiate rocketry club. I
            am active on the Propulsion Software team, where we are currently
            creating software for optimally operating a liquid rocket engine
            test stand. The most recent endeavor has been adding a proportional
            valve to control kerosene flow during propellant fill, flow, and pressurization stages; I built and
            tested support for the proportional valve on the club's legacy
            engine control software. I truly had meaningful interactions through
            learning from the engineers behind the physical valve and
            collaborative discussions regarding best options for implementation
            with the rest of the software team.
          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
              <a
                href="https://gitlab.com/anushka.mkul"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
              <a
                href="https://www.aerospacenu.com/redshift"
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
                <BsArrowRight className="pr-1" /> C++
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Arduino
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Raspberry Pi
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> Docker
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
