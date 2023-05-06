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
            <p className="py-3 mt-10"> the bookshelf</p>
          </div>
          <Carousel
            showArrows={true}
            showThumbs={false}
            className="mx-auto max-w-screen-lg max-h-screen-sm mt-10"
          >
            <div className="carousel-item">
              <Image
                src="/../public/assets/mbf.jpeg"
                alt="Image 1"
                className="fill object-cover"
                width="1"
                height="1"
              />
              <p className="legend text-lg font-bold mt-2">Text for image 1</p>
            </div>
            <div className="carousel-item">
              <Image
                src="/../public/assets/wuthering-heights.jpeg"
                alt="Image 1"
                className="fill object-cover"
                width="1"
                height="1"
              />
              <p className="legend text-lg font-bold mt-2">Text for image 2</p>
            </div>
            <div className="carousel-item">
              <Image
                src="/../public/assets/no-exit-copy.png"
                alt="Image 1"
                className="fill object-cover"
                width="1"
                height="1"
              />
              <p className="legend text-lg font-bold mt-2">Text for image 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Interests2;
