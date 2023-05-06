import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaMusic } from "react-icons/fa";

const MY_ID = process.env.CLIENT_ID;
const MY_SECRET = process.env.CLIENT_SECRET;
const MY_REFRESH_TOKEN = process.env.REFRESH_TOKEN;

let access_token =
  "BQAJgPIL3Vk_WEV7De8i9IUP7bdtduWAogM-r4e4oVfIQJcPq_W0ZOq39r0ld7xGLsid2ls4cweKsJbgUsr96NjeOF0h9dXhh668NMCTK0V29JHwzgLGAK8c8bL0ZOJN9l_6c7CcmdC8dQogDgohZKoOKV7o0BxdMmmix-VwIHn0GIMUVD2KN-qY267UvvoaDOKRMAzFstkkGeq-QS2eL4i1DjiNgYBYoQkDX6hTYxXuZCj8kvEHbhvLWEJl3PmcJgxiQTpjPR7okvSlfxVJJHd8baJY";
console.log(process.env.CLIENT_ID);

async function refreshAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(MY_ID + ":" + MY_SECRET),
    },
    body: "grant_type=refresh_token&refresh_token=" + MY_REFRESH_TOKEN,
  });

  const data = await response.json();
  access_token = data.access_token;
}

async function fetchWebApi(endpoint, method, body = null) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    method,
    body: body ? JSON.stringify(body) : null,
  });
  return res.json();
}

async function getTopTracks() {
  const tracks = await fetchWebApi(
    "v1/me/top/tracks?time_range=short_term&limit=5",
    "GET"
  );
  return tracks.items.map((track) => {
    return {
      ...track,
      uri: track.uri,
    };
  });
}

async function getRecommendations() {
  const topTracks = await getTopTracks();
  const artistIds = topTracks.map((track) => track.artists[0].id).join(",");
  const recommendations = await fetchWebApi(
    `v1/recommendations?limit=5&seed_artists=${artistIds}`,
    "GET"
  );
  return recommendations.tracks.map((track) => {
    return {
      ...track,
      uri: track.uri,
    };
  });
}

const Interests1 = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [refresh, setRefresh] = useState(false); // refresh recommendations state variable
  const [isVisible, setIsVisible] = useState(false); // fade in state variable
  const interestsRef = useRef(null);

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
    async function fetchTopTracks() {
      const tracks = await getTopTracks();
      setTopTracks(tracks);
    }
    async function fetchRecommendations() {
      const tracks = await getRecommendations();
      setRecommendations(tracks);
    }
    fetchTopTracks();
    fetchRecommendations();
  }, [refresh]); // add refresh as a dependency

  const handleRefresh = () => {
    setRefresh(!refresh); // toggle refresh state
  };

  return (
    <div
      id="interests1"
      className="w-full lg:h-screen py-3 p-2"
      ref={interestsRef}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="uppercase text-3xl md:text-3xl text-center tracking-wider pt-2 text-[#68B0AB]">
            <ReactTypingEffect
              text="Current state of Anushka"
              eraseDelay={5000}
              eraseSpeed={100}
              typingSpeed={100}
              typingDelay={1000}
            />
          </h2>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <p className="text-center pt-2 max-w-2xl mx-auto">
            In my free time, I love consuming media, whether it be reading a new
            historical fiction book or creating random but perfectly collated
            music playlists. Here's what I'm diving into at the moment!
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
          <h2 className="uppercase text-md md:text-lg text-center m-auto items-center tracking-wider py-2">
            <FaMusic />
          </h2>

          <p className="text-center max-w-2xl mx-auto">
            As a lover of music and algorithms, Spotify has my heart. I'm hoping
            to fiddle around with the Spotify Web API soon and create something
            that combines my passions. For now, enjoy what I'm listening to,
            courtesy of some API calls! Here are my top tracks from the last 30
            days. Check back soon for updates!
          </p>
          <div className="grid grid-cols-3 gap-8 justify-center items-center my-3 mx-auto">
            {topTracks.slice(0, 3).map(({ id, name, artists, uri }) => (
              <iframe
                src={`https://open.spotify.com/embed/track/${
                  uri.split(":")[2]
                }`}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                key={id}
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div>
          <div className="flex gap-8 justify-center items-center my-3 mx-auto">
            {topTracks.slice(3, 5).map(({ id, name, artists, uri }) => (
              <iframe
                src={`https://open.spotify.com/embed/track/${
                  uri.split(":")[2]
                }`}
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                key={id}
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div>
          <p className="max-w-6xl py-2 text-center">
            using the spotify recommendation algorithm, here are 5
            recommendations based on the songs i listen to
          </p>
          <div className="flex flex-col items-center">
            <button
              className="h-12 w-30 px-6 my-2 hover:scale-105 ease-in duration-300"
              onClick={() => setRefresh((prev) => !prev)}
            >
              Refresh Recommendations
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-center my-3 mx-auto">
            {recommendations.slice(0, 3).map(({ id, name, artists, uri }) => (
              <iframe
                src={`https://open.spotify.com/embed/track/${
                  uri.split(":")[2]
                }`}
                width="300"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                key={id}
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div>
          <div className="flex gap-8 justify-center items-center my-3 mx-auto">
            {recommendations.slice(3, 5).map(({ id, name, artists, uri }) => (
              <iframe
                src={`https://open.spotify.com/embed/track/${
                  uri.split(":")[2]
                }`}
                width="300"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                key={id}
                className={`transform ${isVisible ? "fade-upwards" : ""}`}
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests1;
