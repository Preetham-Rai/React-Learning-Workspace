import { useState, useMemo } from "react";
import SongCard from "./Components/SongCard";
import Songs from "./services/songs";

function App() {
  let [songs, setSongs] = useState();
  let [ratings, setRatings] = useState();

  function sortByTitle() {
    songs = Songs.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
    );
    setSongs(...songs);
  }

  function sortByRatings() {
    ratings = Songs.sort((a, b) => b.rating - a.rating);
    setRatings(...ratings);
  }

  return (
    <div id="super-tunes">
      <h2 id="st-title">SuperTunes - Songs of the week</h2>
      <button className="st-btn" onClick={sortByTitle}>
        Sort by title
      </button>
      <button className="st-btn" onClick={sortByRatings}>
        Sort by Rating
      </button>
      <div id="song-list">
        {Songs.map((song) => (
          <SongCard key={song.id} data={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
