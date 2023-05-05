import React, { useState, useEffect, useRef } from "react";

const token =
  "BQBYvGpovLZoiSVMBQcUG1nSUz3wpnU5HKGvkBTFDTKbeLFUn_X1ANsApu6zU3MjTzfs1iCa-LRKSmBhBAz4VXzC9A34PuLmq09xbViYqysV6HtTGhxiTcXiUbb1j4ufx4R_gMMW-1D9mpPyWY3P-IEYBeAAj4VT6sx51chpNcF-wxROfUkfQv5j_mXrnbDfiJIYDgiiFdBlfg66NJWAfFXiAVVQBJNnYYvtsRs56stegxHsVZJ1qlMcXo7_ckq8nw6n0UyUjd9LnrBqOyK8VpuvEqvk";

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return res.json(); // remove await
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

const Interests = () => {
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
      id="interests"
      className="w-full lg:h-screen py-3 p-2"
      ref={interestsRef}
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="uppercase text-xl text-right tracking-wident text-[#68B0AB] justify-end ml-auto">
          Interests
        </h2>
        <p className="justify-end text-right">
          In my free time, I love consuming media, whether it be reading a new
          historical fiction book or creating random but perfectly collated
          music playlists. Here's what I'm diving into at the moment!
        </p>

        <h3 className="uppercase text-xl tracking-wident text-[##8FC0A9]">
          Music
        </h3>
        <div className="grid grid-cols-3 gap-8 justify-center items-center my-3 mx-auto">
          {topTracks.slice(0, 3).map(({ id, name, artists, uri }) => (
            <iframe
              src={`https://open.spotify.com/embed/track/${uri.split(":")[2]}`}
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              key={id}
              className={`${isVisible ? "fade-upwards" : ""}`}
            ></iframe>
          ))}
        </div>
        <div className="flex gap-8 justify-center items-center my-3 mx-auto">
          {topTracks.slice(3, 5).map(({ id, name, artists, uri }) => (
            <iframe
              src={`https://open.spotify.com/embed/track/${uri.split(":")[2]}`}
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              key={id}
              className={`${isVisible ? "fade-upwards" : ""}`}
            ></iframe>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 justify-center items-center my-3 mx-auto">
          {recommendations.slice(0, 3).map(({ id, name, artists, uri }) => (
            <iframe
              src={`https://open.spotify.com/embed/track/${uri.split(":")[2]}`}
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              key={id}
              className={`${isVisible ? "fade-upwards" : ""}`}
            ></iframe>
          ))}
        </div>
        <div className="flex gap-8 justify-center items-center my-3 mx-auto">
          {recommendations.slice(3, 5).map(({ id, name, artists, uri }) => (
            <iframe
              src={`https://open.spotify.com/embed/track/${uri.split(":")[2]}`}
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              key={id}
              className={`${isVisible ? "fade-upwards" : ""}`}
            ></iframe>
          ))}
        </div>

        <button onClick={() => setRefresh((prev) => !prev)}>
          Refresh Recommendations
        </button>
      </div>
    </div>
  );
};

export default Interests;
