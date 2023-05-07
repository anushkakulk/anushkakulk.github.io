import React from "react";
import { FaBook } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import { ImageCarousel } from "../lib/books";
import Image from "next/image";

const Interests2 = () => {
  return (
    <div id="interests2" className="w-full max-h-screen">
      <div className="max-w-[1240px] lg:py-16 xl:p-64 xl:mb-40 mx-auto flex flex-wrap ">
        <div className="relative w-full">
          <div className="flex justify-center items-center ">
            <h1 className="text-2xl mb-6">
              <FaBook />
            </h1>
            
          </div>
          <p className="text-center text-sm p-5 max-w-2xl mx-auto md:max-w-none"> a stroll through the bookshelf: my latest and greatest reads</p>

          <div className="mx-auto max-w-screen-lg lg:h-[75%]  pb-20 mt-2">
            <Carousel
              showArrows={true}
              showThumbs={false}
              className="mx-auto max-w-screen-lg h-screen sm:h-1/2 md:h-1/2 "
            >
              <div className="carousel-item">
                <Image
                  src="/../public/assets/newer-mbf.png"
                  alt="Image mbf"
                  className="fill h-full sm:object-cover"
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
                  src="/../public/assets/huis-close.png"
                  alt="Image ne"
                  className="fill h-full sm:object-cover"
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
                  src="/../public/assets/new-wh.png"
                  alt="Image wh"
                  className="fill h-full sm:object-cover"
                  width="500"
                  height="500"
                />
                <p className="legend text-sm sm:text-lg font-bold mt-2">
                  <i>Wuthering Heights</i> has been my favorite novel since I
                  was in 9th grade. I loved the drama, the gothic vibe, the
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
