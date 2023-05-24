const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();
  return fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTrackIds = async () => {
  const { access_token } = await getAccessToken();
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const { items } = await response.json();
  const trackIds = items.map((track) => track.id).join(",");

  return trackIds;
};

export const recommendedTracks = async () => {
  const { access_token } = await getAccessToken();
  const tracksIds = await getTrackIds();
  const timestamp = Date.now();
  return fetch(`https://api.spotify.com/v1/recommendations?timestamp=${timestamp}&seed_tracks=${tracksIds}&limit=5`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}