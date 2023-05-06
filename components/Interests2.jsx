import React from "react";
import { FaBook } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import { ImageCarousel } from "../lib/books";
import Image from "next/image";

const Interests2 = () => {
  return (
    <div id="interests2" className="relative w-full lg:h-screen py-20">
      <div className="max-w-[1240px] mx-auto flex flex-wrap">
        <div className="relative w-full">
          <div className="text-center py-2">
            <h2 className="absolute top-50 left-0 w-full text-center text-md font-bold">
              <FaBook className="inline-block mr-2" />
            </h2>
            <p className="py-3 mt-10">a stroll through my bookshelf</p>
          </div>
          <div className="mx-auto max-w-screen-lg lg:h-[75%] md:h-[75%] pb-20 mt-2 overflow-hidden">
            <Carousel
              showArrows={true}
              showThumbs={true}
              className="mx-auto max-w-screen-lg h-[500px] lg:h-[600px]"
            >
              <div className="carousel-item">
                <Image
                  src="/../public/assets/newer-mbf.png"
                  alt="Image mbf"
                  className="fill h-full object-cover"
                  width="700"
                  height="700"
                />
                <p className="legend text-md font-bold mt-2 sm:text-sm">
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
                  className="fill h-full object-cover"
                  width="1000"
                  height="1000"
                />
                <p className="legend text-lg font-bold mt-2 sm:text-sm">
                  Read in the summer before college, <i>No Exit</i> was a great
                  look into the chaos of existentialism. Short and sweet, it
                  really packs a punch and makes the reader ponder about the
                  absurdity of our interactions with "the Other"{" "}
                </p>
              </div>
              <div className="carousel-item">
                <Image
                  src="/../public/assets/new-wh.png"
                  alt="Image wh"
                  className="fill h-full object-cover"
                  width="500"
                  height="500"
                />
                <p className="legend text-lg font-bold mt-2 sm:text-sm">
                  <i>Wuthering Heights</i> has been my favorite novel since I
                  was in 9th grade. I loved the drama, the mundanity, the gothic
                  vibe, and definitely found it a very approachable read for
                  being a 'classic.'{" "}
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
