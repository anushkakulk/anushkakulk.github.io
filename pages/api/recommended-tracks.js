import { recommendedTracks } from "../../lib/spotify";

export default async function handler(req, res) {
  try {
    const response = await recommendedTracks();
    const data = await response.json();

    
    if (!data || !data.tracks) {
        throw new Error("Invalid response from Spotify API");
      }
  
      const tracks = data.tracks.map((track) => ({
        title: track.name,
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        url: track.external_urls.spotify,
        coverImage: track.album.images[1],
      }));
  
  
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=86400, stale-while-revalidate=43200"
      );
  
     // res.setHeader("Cache-Control", "no-store");

      return res.status(200).json(tracks);
  } catch (error) {
    console.error("Error fetching recommended tracks:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

