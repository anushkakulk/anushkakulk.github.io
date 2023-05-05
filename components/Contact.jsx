import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaSpotify, FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
        <div id="contact" className="relative w-full lg:h-screen">
          <div className="absolute bottom-0 w-full bg-gray-200 py-4 text-center">
            <h2 className="uppercase text-3xl tracking-wident text-[#68B0AB]">
              Contact
            </h2>
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
              <div className="w-full h-full p-2 justify-end items-end text-end">
                <p>Here's how you can reach out to me:</p>
              </div>
              <div className="grid lg:grid-cols-5 gap-8">
                {/* left */}
                <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2">
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
                          href="https://www.discordapp.com/users/1019442796941291603/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaDiscord />
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
                          href="https://open.spotify.com/user/kulkarni.amk366?si=95c5471446614589"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaSpotify />
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
                      </div>
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
