import React, { useState, useEffect } from "react";
const token =
  "BQB-_04bhFJAbKC3c_GMTZLUMUCUY3BsiaAUvrOCw8ojQnhvbLGRpH1-1FDS-qEz85kNIKvKKA7rOWsMhNHB6jxHeA13dagkOQhlLQ8kdUheenDez3dX0QkQP8zoqvHpc0dhgbFQHpzyZ5FkAGelxq-a2ub8haJFHm2JDSFL-wwkAA2q5eqelh0lIxfI5zK4gPw1eHhVTdlGRggVlTqpzI72McHeM3WsPyXzMWeHJ6cAJcSxOSmF6bxwPBPBQl4-ewhyV6OwiXGyWXVvKmA8SdvUUUdBD3o2wOBoWTwLLH5RXM3cQsEV-5QqLi19q2o8DvL1bSJxJxnoY-91BpMIQvMjTzZThjbkFg";
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
  }, []);

  return (
    <div id="interests" className="w-full lg:h-screen py-3 p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="uppercase text-xl text-right tracking-wident text-[#68B0AB] justify-end ml-auto">
          Interests
        </h2>
        <p className ="justify-end text-right">
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
            ></iframe>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Interests;
