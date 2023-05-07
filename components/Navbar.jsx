import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-22 shadow-xl z-[100]"
          : "fixed w-full h-22  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px16">
        <Link href="/">
          <Image
            src="/../public/assets/revised-navbar-logo.png"
            alt="/"
            width="300"
            height="100"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#interests1">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Interests
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenuUnfold size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F5F5F3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between border-b border-gray-300 m4">
            <h3 className="uppercase tracking-widest text-[#68B0AB]"> 
            menu
            </h3>
           <div className="py-4">
            <div
              onClick={handleNav}
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer scale-75"
            >
              <AiOutlineMenuFold size={25} />
            </div>
            </div>
          </div>
          <div className="py-4 flex flec-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#interests1">
                <li className="py-4 text-sm">Interests</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
              <div className="pt-35">
                <div className="flex items-center justify-between  my-4 w-full sm:w-[80%] py-4 ">
                  <div className="logo-container logo-item mr-2 rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://www.linkedin.com/in/anushkakulk">
                      <FaLinkedinIn />
                    </a>
                  </div>

                  <div className="logo-container logo-item ml-2 rounded-full shadow-lg shadow-[#8FC0A9] p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="mailto:anushka.mkul@gmail.com">
                      <MdEmail />
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
