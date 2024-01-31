import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import multipleImg from '../public/assets/projects/multiPL-E.png';
import aeroImg from '../public/assets/projects/revised-aero.png'
import stonksImg from '../public/assets/projects/stonks.gif'
import reversi from '../public/assets/projects/reversidemo.gif'
import webImg from '../public/assets/covers/thisone.png'
import courtImg from '../public/assets/projects/courtUML.png';
import ReactTypingEffect from 'react-typing-effect';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto py-20'>
      <h2 className="uppercase text-3xl p-2 py-2 sm:py-8 tracking-widest text-[#68B0AB]">
          <ReactTypingEffect text = "Projects" eraseDelay={5000} eraseSpeed={100} typingDelay={1000}/>
          </h2>
        <div className='grid md:grid-cols-2 gap-8'>
        
          
        <ProjectItem
            title='Reversi - MVC design'
            backgroundImg={reversi}
            projectUrl='/reversi'
            tech='Java'
            className = " project-container project-item"
            
          />
          <ProjectItem
            title='AerospaceNU Engine Control Software'
            backgroundImg={aeroImg}
            projectUrl='/aero'
            tech='C++'
            className = " project-container project-item"
            
          />
          <ProjectItem
            title='Court Reservation System'
            backgroundImg={courtImg}
            projectUrl='/courtres'
            tech='C++'
            
          />
          <ProjectItem
            title='MultiPL-E Objective-C Translator'
            backgroundImg={multipleImg}
            projectUrl='/research'
            tech='Python, Obj-C, Code LLMs'
           
          />
          <ProjectItem
            title='Portfolio Website'
            backgroundImg={webImg}
            projectUrl='/portfoliowebsite'
            tech='Next.js, Tailwind, Spotify API'
            
          />
           <ProjectItem
            title='First Project Ever - Simple Platformer Game'
            backgroundImg={stonksImg}
            projectUrl='/firstgame'
            tech='Unity, C#'
            
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;