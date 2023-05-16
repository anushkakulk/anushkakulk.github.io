import React from "react";
import { FaBook } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import Image from "next/image";
import mbf from "../public/assets/covers/newer-mbf.png";
import ne from "../public/assets/covers/huis-close.png";
import wh from "../public/assets/covers/new-wh.png";

const Interests2 = () => {
  return (
    <div id='interests2' className='w-full'>
    <div className='max-w-[1240px] mx-auto py-20 flex flex-wrap'>
        <div className="relative w-full">
          <div className="flex justify-center items-center ">
            <h1 className="text-2xl lg:pt-40 mb-6">
              <FaBook />
            </h1>
            
          </div>
          <p className="text-center text-sm p-5 max-w-3xl mx-auto md:max-w-none"> A stroll through the bookshelf: my latest and greatest reads</p>

          <div className="mx-auto max-w-screen-lg h-screen lg:h-[75%] pb-20 mt-2">
            <Carousel
              showArrows={true}
              showThumbs={false}
              className="mx-auto max-w-screen-lg h-screen md:h-3/4"
            >
              <div className="carousel-item">
                <Image
                  src={mbf}
                  alt="Image mbf"

                  width="700"
                  height="700"
                />
                <p className="legend text-xs sm:text-lg font-bold mt-2 ">
                  <i>My Brilliant Friend</i>, set in the 1950s, is the first of
                  <i> The Neopolitan Novels</i>, a quartet that follows the
                  entire lives of two women who try to break free from their
                  stultifying working class Neopolitan neighborhood. Spanning
                  their adolescene, <i>MBF</i> really immerses you in the era; I
                  recommend the whole series!
                </p>
              </div>
              <div className="carousel-item">
                <Image
                  src={ne}
                  alt="Image ne"

                  width="1000"
                  height="1000"
                />
                <p className="legend text-sm sm:text-lg font-bold mt-2 ">
                  Read in the summer before college, <i>No Exit</i> was a great
                  look into the chaos of existentialism. Short and sweet, it
                  really packs a punch. Truly left me thinking "huh... cool".{" "}
                </p>
              </div>
              <div className="carousel-item">
                <Image
                  src={wh}
                  alt="Image wh"

                  width="500"
                  height="500"
                />
                <p className="legend text-sm sm:text-lg font-bold mt-2">
                  <i>Wuthering Heights</i> has been my favorite novel since I
                  was in 9th grade. I loved the drama, the dark and dreary vibe, the
                  detail on mundane affairs. I definitely found it a very
                  approachable read for being a 'classic,' and am currently in
                  the middle of a re-read.{" "}
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests2;
