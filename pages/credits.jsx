
import React from "react";

import Link from "next/link";

const credits = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">

      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2">Credits</h2>
          <h3></h3>
        </div>
        </div>
   

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h3>
           Images
          </h3>
          <a
            href=" https://www.europaeditions.co.uk/book/9781787702226/my-brilliant-friend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">MBF Book Cover</button>
          </a>
          <a
            href="https://www.etsy.com/listing/1181038593/no-exit-jean-paul-sartre-philosophy"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">No Exit Book Cover</button>
          </a>
          <a
            href="https://penguinrandomhousehighereducation.com/book/?isbn=9780553898026"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Wuthering Heights Book Cover</button>
          </a>
        </div>
        <div className="col-span-4">
          <h3>
           Resources For Development
          </h3>
          <a
            href="https://developer.spotify.com/documentation/web-api"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Spotify Web API Documentation</button>
          </a>

          <a
            href="https://github.com/einargudnig/einargudni.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Example Portfolio Site 1</button>
          </a>
          <a
            href="https://github.com/fireclint/portfolio-nextjs/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Example Portfolio Site 2</button>
          </a>
        </div>

        
      </div >
      <div className="absolute top-[10%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[+50%] z-10 p-2">
      <Link href="/">
          <p className="underline cursor-pointer">Back to Home</p>
        </Link>
        </div>
    </div>
  );
};

export default credits;
