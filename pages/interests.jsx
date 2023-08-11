import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaBook, FaSpotify } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import Image from "next/image";
import mbf from "../public/assets/covers/newer-mbf.png";
import ne from "../public/assets/covers/huis-close.png";
import wh from "../public/assets/covers/new-wh.png";

const Interests = () => {
  const [tracks, setTracks] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // fade in state variable
  const interestsRef = useRef(null);
  const [songData, setSongData] = useState({
    isPlaying: false,
    title: "",
    artist: "",
    album: "",
    albumImageUrl: "",
    songUrl: "",
  });

  const TrackSection = ({ title, url, artist, coverImage }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
      >
        <div className="flex items-center">
          <img
            src={coverImage.url}
            alt={`Cover for ${title}`}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-gray-600">{artist}</p>
          </div>
        </div>
      </a>
    );
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(interestsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch("/api/tracks");
      const data = await res.json();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  useEffect(() => {
    const fetchRecommended = async () => {
      const res = await fetch("/api/recommended-tracks");
      const data = await res.json();
      setRecommended(data);
    };
    fetchRecommended();
  }, [refresh]);

  useEffect(() => {
    async function getSongData() {
      const res = await fetch("/api/now-playing");
      const data = await res.json();
      setSongData(data);
    }

    const intervalId = setInterval(() => {
      getSongData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { isPlaying, title, artist, album, albumImageUrl, songUrl } = songData;

  return (
    <div id="interests" className="w-full" ref={interestsRef}>
      <div className="max-w-[1240px] mx-auto py-20 flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="uppercase text-xl md:text-3xl text-center tracking-wider pt-10 text-[#68B0AB]">
            <ReactTypingEffect
              text="Current state of Anushka"
              eraseDelay={5000}
              eraseSpeed={100}
              speed={100}
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
          <div className="max-w-6xl p-4">
            <p className="text-center  pt-2 max-w-2xl mx-auto md:max-w-none">
              As a lover of music and algorithms, Spotify has my heart. Enjoy
              what I'm listening to, courtesy of some Spotify Web API
              integration!
            </p>
            <div className="flex justify-center items-center py-4">
              <FaSpotify className=" mr-2" />
              <p className="text-center text-xs sm:text-lg text-[#68B0AB] text-md">
                My top tracks from the past month, updated daily:
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(0, 3).map((track) => (
              <TrackSection
                key={track.trackId}
                title={track.title}
                url={track.url}
                artist={track.artist}
                coverImage={track.coverImage}
              />
            ))}
          </div>
          <div className="flex gap-4 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(3, 5).map((track) => (
              <TrackSection
                key={track.trackId}
                title={track.title}
                url={track.url}
                artist={track.artist}
                coverImage={track.coverImage}
              />
            ))}
          </div>
          {/* <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(0, 3).map((track) => (
              <iframe
                src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                  track.url
                )}`}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div>
          <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(3, 5).map((track) => (
              <iframe
                src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                  track.url
                )}`}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div> */}
          <div className="flex justify-center items-center p-4 max-w-6xl">
            <FaSpotify className="hidden md:block mr-2" />
            <p className="text-center text-xs sm:text-lg text-[#68B0AB] text-md">
              Check out some recommended songs based on my listening history:
            </p>
          </div>
          <button
            className="flex justify-center items-center my-3 p-4 max-w-6xl hover:scale-105 ease-in duration-300"
            onClick={() => setRefresh((prev) => !prev)}
          >
            Refresh Recommendations
          </button>
          <div className="flex gap-4 justify-center sm:flex-row items-center my-3 mx-auto">
            {recommended.slice(0, 3).map((track) => (
              <TrackSection
                key={track.trackId}
                title={track.title}
                url={track.url}
                artist={track.artist}
                coverImage={track.coverImage}
              />
            ))}
          </div>
          <div className="flex gap-4 justify-center sm:flex-row items-center my-3 mx-auto">
            {recommended.slice(3, 5).map((track) => (
              <TrackSection
                key={track.trackId}
                title={track.title}
                url={track.url}
                artist={track.artist}
                coverImage={track.coverImage}
              />
            ))}
          </div>
          {/* <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
            {recommended.slice(0, 3).map((track) => (
              <iframe
                src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                  track.url
                )}`}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div>

          <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
            {recommended.slice(3, 5).map((track) => (
              <iframe
                src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                  track.url
                )}`}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div> */}

          <div className="flex flex-col gap-8 justify-center sm:flex-row items-center mx-auto">
            {isPlaying ? (
              <div>
                <div className="image-item">
                  <div className="flex justify-center items-center py-4">
                    <FaSpotify className=" mr-2 mb-2" />
                    <p className="text-center mb-2 text-xs sm:text-lg text-[#68B0AB] text-md">
                      Hey, I'm listening to music right now! Now playing:
                    </p>
                  </div>

                  <iframe
                    src={`https://open.spotify.com/embed?uri=${encodeURIComponent(
                      songUrl
                    )}`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className="fade-in"
                  ></iframe>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-20 flex flex-wrap">
        <div className="relative w-full">
          <div className="flex justify-center items-center py-4">
            <FaBook className="hidden md:block mr-2 mb-2" />
            <p className="text-center mb-2 text-xs sm:text-lg text-[#68B0AB] text-md">
              A stroll through my bookshelf: my latest and greatest reads
            </p>
          </div>
          <div className="mx-auto max-w-screen-lg h-screen lg:h-[75%] pb-20 mt-2">
            <Carousel
              showArrows={true}
              showThumbs={false}
              className="mx-auto max-w-screen-lg h-screen md:h-3/4"
            >
              <div className="carousel-item">
                <Image src={mbf} alt="Image mbf" width="700" height="700" />
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
                <Image src={ne} alt="Image ne" width="1000" height="1000" />
                <p className="legend text-sm sm:text-lg font-bold mt-2 ">
                  Read in the summer before college, <i>No Exit</i> was a great
                  look into the chaos of existentialism. Short and sweet, it
                  really packs a punch. Truly left me thinking "huh... cool".{" "}
                </p>
              </div>
              <div className="carousel-item">
                <Image src={wh} alt="Image wh" width="500" height="500" />
                <p className="legend text-sm sm:text-lg font-bold mt-2">
                  <i>Wuthering Heights</i> has been my favorite novel since I
                  was in 9th grade. I loved the drama, the dark and dreary vibe,
                  the detail on mundane affairs. I definitely found it a very
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

export default Interests;
