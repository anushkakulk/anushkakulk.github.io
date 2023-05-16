
import React from "react";
import Link from "next/link";

const research = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
       
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Demo? You've been seeing the demo!</h2>
          <h3>lol</h3>
        </div>
      </div>

      <Link href="/#projects">
        <p className="underline cursor-pointer text-center py-5">Back</p>
      </Link>
    </div>
  );
};

export default research;
