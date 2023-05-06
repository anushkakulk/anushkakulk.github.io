import React from "react";
import { FaBook } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import { ImageCarousel } from "../lib/books";
import Image from "next/image";

const Interests2 = () => {
  return (
    <div id="interests" className="w-full lg:h-screen py-3 p-2">
      <div className="max-w-[1240px] mx-auto flex flex-wrap">
        <div className="relative w-full">
          <div className="pt-10 text-center py-2">
            <h2 className="absolute top-50 left-0 w-full text-center text-md font-bold">
              <FaBook className="inline-block mr-2" />
            </h2>
            <p className="py-3 mt-10">a walk through my bookshelf</p>
          </div>
          <Carousel
            showArrows={true}
            showThumbs={true}
            className="mx-auto max-w-screen-lg md:h-[25%] mt-2"
          >
            <div className="carousel-item">
              <Image
                src="/../public/assets/newer-mbf.png"
                alt="Image mbf"
                className="fill object-cover"
                width="700"
                height="700"
              />
              <p className="legend text-lg font-bold mt-2">
                My most recent read, <i>My Brilliant Friend</i> was a book I
                couldn't put down. This book, set in the 1950s, is the first of
                a quartet <i>The Neopolitan Novels</i> that follows the lives
                entire of two women who try to break free from their stultifying
                working class neighborhood in Naples, Italy. This book, spanning
                their adolescene, really immerses you in the era; I really
                recommend the whole series!
              </p>
            </div>
            <div className="carousel-item">
              <Image
                src="/../public/assets/huis-close.png"
                alt="Image ne"
                className="fill object-cover"
                width="1000"
                height="1000"
              />
              <p className="legend text-lg font-bold mt-2">
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
                className="fill object-cover"
                width="500"
                height="500"
              />
              <p className="legend text-lg font-bold mt-2">
                <i>Wuthering Heights</i> has been my favorite novel since I was
                in 9th grade. I loved the drama, the mundanity, the gothic vibe,
                and definitely found it a very approachable read for being a
                'classic.'{" "}
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Interests2;
