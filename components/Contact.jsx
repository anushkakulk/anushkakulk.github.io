import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaSpotify, FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ReactTypingEffect from "react-typing-effect";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="uppercase text-3xl text-center items-center tracking-wident text-[#68B0AB]">
          <ReactTypingEffect
            text="Contact"
            eraseDelay={5000}
            eraseSpeed={100}
            typingDelay={1000}
          />
        </h2>
        <div className="pt-8">
          <div>
            <p className="py-4 text-center">
              I am best reachable by email, but feel free to approach me on
              these platforms.
            </p>
          </div>
          <div className=" w-full h-full shadow-xl shadow-[#8FC0A9] rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/anushkakulk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    href="mailto:anushka.mkul@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>

                  <a
                    href="https://www.discordapp.com/users/1019442796941291603/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaDiscord />
                    </div>
                  </a>
                  <a
                    href="https://open.spotify.com/user/kulkarni.amk366?si=95c5471446614589"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaSpotify />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
