import React, { useEffect, useState } from "react";
import "./BodySection.css";

export default function BodySection() {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    async function fetchMovie() {
      const randomTerms = [
        "love", "war", "hero", "dark", "fire",
        "night", "storm", "rise", "lost", "blood"
      ];
      const term = randomTerms[Math.floor(Math.random() * randomTerms.length)];

      const response = await fetch(
        `https://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search.slice(0, 5));
      }
    }

    fetchMovie();
  }, []);

  const nextMovie = () => setCurrent((prev) => (prev + 1) % movies.length);
  const prevMovie = () => setCurrent((prev) => (prev - 1 + movies.length) % movies.length);

  if (movies.length === 0) return null;

  const movie = movies[current];

  const durations = ["28:35", "2:43", "2:07", "5:35", "3:12"];
  const likes =     [32, 426, 184, 35, 210];
  const hearts =    [7,  234, 76,  14, 88];

  return (
    <div className="container">

      
      <div className="hero">

        <div className="heroBg" />

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="heroImage"
        />

        <div className="gradient" />

        <button className="arrow left" onClick={prevMovie}>❮</button>
        <button className="arrow right" onClick={nextMovie}>❯</button>

        <div className="heroInfo">
          <img src={movie.Poster} className="poster" alt={movie.Title} />

          <div className="playButton">▶</div>

          <div className="textInfo">
            <div className="titleRow">
              <h2>{movie.Title}</h2>
              <span className="duration">{durations[current]}</span>
            </div>
            <p>Watch the Trailer</p>
            <div className="reactions">
              <span>👍 {likes[current]}</span>
              <span>❤️ {hearts[current]}</span>
            </div>
          </div>
        </div>

      </div>

      
      <div className="upNext">
        <h3>Up next</h3>

        {movies.map((m, index) => (
          <div
            key={m.imdbID}
            className={`card ${index === current ? "activeCard" : ""}`}
            onClick={() => setCurrent(index)}
          >
            <div className="thumbWrap">
              <img src={m.Poster} alt={m.Title} />
              <div className="thumbOverlay">
                <div className="smallPlay">▶</div>
                <span className="thumbDuration">{durations[index]}</span>
              </div>
            </div>

            <div className="cardText">
              <p>{m.Title}</p>
              <span className="cardSub">Watch the Trailer</span>
              <div className="cardReactions">
                <span>👍 {likes[index]}</span>
                <span>❤️ {hearts[index]}</span>
              </div>
            </div>
          </div>
        ))}

        <div className='browse'>Browse trailers ➤</div>
      </div>

    </div>
  );
  <hr></hr>
}