import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaMusic } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import { ImageCarousel } from "../lib/books";
import Image from "next/image";

const Interests1 = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch("/api/tracks");
      const data = await res.json();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  return (
    <div
      id="interests1"
      className="w-full lg:h-screen pt-10 p-2 mb-8 "
    >
      <div className="max-w-6xl py-8 mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="uppercase text-xl md:text-3xl text-center tracking-wider pt-10 text-[#68B0AB]">
            <ReactTypingEffect
              text="Current state of Anushka"
              eraseDelay={5000}
              eraseSpeed={100}
              typingDelay={1000}
              className="text-l md:text-3xl"
            />
          </h2>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <p className="text-center pt-10 max-w-2xl mx-auto">
            In my free time, I love consuming media, whether it be reading a new
            historical fiction book or creating random but perfectly collated
            music playlists. Here's what I'm diving into at the moment!
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
          <h1 className="uppercase text-xl md:text-lg text-center m-auto text-mdfont-bold items-center tracking-wider py-2">
            <FaMusic />
          </h1>
          <div className="max-w-6xl p-4">
            <p className="text-center text-sm pt-2 max-w-2xl mx-auto md:max-w-none">
              As a lover of music and algorithms, Spotify has my heart. I'm
              hoping to fiddle around with the Spotify Web API soon and create
              something that combines my passions. For now, enjoy what I'm
              listening to, courtesy of some automated API calls! Here are my
              top tracks from the last 30 days, updated daily.
            </p>
          </div>
          <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(0, 3).map((track) => (
             
                <iframe
                  src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                    track.url
                  )}`}
                  width="100%"
                  height="270"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              
            ))}
          </div>
          <div className="flex flex-col gap-8 justify-center sm:flex-row items-center mx-auto">
            {tracks.slice(3, 5).map((track) => (
                <iframe
                  src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                    track.url
                  )}`}
                  width="100%"
                  height="270"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests1;
