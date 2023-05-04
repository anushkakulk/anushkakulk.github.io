import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h=screen p-2 felx items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className = 'uppercase text-xl tracking-wident text-[#68B0AB]'>About Me</h2>
          <p className ='py-2  text-gray-600'>
            {" "}
            Originally from Delaware, I was lucky to attend a high school where
            computer science was taught in depth. I will never forget the
            enjoyment of staying past the normal class time to finish coding a
            sudoku game in java and tinkering around in blender in 2018. Since
            then, I fell in love with the problem-solving and thinking outside
            the box that programming offers and quickly exhausted my high
            school's software development course offerings.
          </p>
          <p className ='py-2  text-gray-600'>
            {" "}
            Enamored by the intricacies of programming, I was eager to learn
            more. Currently, I am on track to complete a B.S. in Computer Science with a
            concentration in Artificial Intelligence and a minor in Robotics at
            Northeastern University in Boston, MA. I'm looking forward to taking
            classes that delve into machine learning and electrical engineering
            to supplement my software development and theory classes. I'm also
            enthused to be developing for research on code LLMs and active in
            AerospaceNU, where I am working on the engine control software for a
            liquid-fuelled rocket. NEED TO ADD IMAGE
          </p>
        </div>
        <div className= 'col-span-1 m-auto'>
        <Image
          src="/../public/assets/revised-about-me.png"
          alt="/"
          width="325"
          height="100"
        />
        </div>
      </div>
    </div>
  );
};
export default About;
