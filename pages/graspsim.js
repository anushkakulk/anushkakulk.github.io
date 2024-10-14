import Image from "next/image";
import React from "react";
import robotgrasper from '../public/assets/projects/robot-grasper.png'
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const graspsim = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="contain"
          src={robotgrasper}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Robot Grasp Detection Model</h2>
          <h3>Python, TensorFlow</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>~/Projects/RobotGraspModel</p>
          <h2 className="py-2">Overview</h2>
          <p className="py-2 ">
          While studying Robotic Science and Systems, I learned about both reinforcement learning and deep learning, 
          particularly in the realm of autonomous robotic manipulation. To put these concepts into practice, 
          I worked on a project where I trained and simulated a 6DOF robotic arm to grasp objects of varying shapes 
          and orientations. Using a MobileNetV3 backbone design for the Convolutional Neural Network used for image classification, I was able 
          to build an efficient and high-performing model. I further enhanced the model's performance through data 
          augmentation techniques, supporting generalization across different object types and 
          orientations and bolsering the performance!
          </p>
          <p>
          This project allowed me to develop hands-on experience with machine learning workflows, 
          from data preparation to model deployment, and inspired me to continue to apply my skills to push 
          the boundaries of autonomous systems!

          </p>
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-4">
            <div className="logo-container logo-item mr-2 flex rounded-full shadow-lg shadow-[#8FC0A9] p-6">
            <a
                href="https://github.com/anushkakulk/robotgrasping-sim"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsCodeSlash />
                </div>
              </a>
              <a href="https://arxiv.org/pdf/1905.02244" target="_blank" rel="noreferrer">
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
                <BsArrowRight className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsArrowRight className="pr-1" /> TensorFlow
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

export default graspsim;
