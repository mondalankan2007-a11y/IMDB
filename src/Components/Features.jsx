import { useEffect, useState } from "react";
import "./Features.css";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Features() {
  const [movies, setMovies] = useState([]);

  const movieList = [
    "tt0111161",
    "tt0068646",
    "tt0468569",
    "tt0133093",
    "tt0109830",
    "tt1375666",
    "tt0120737",
    "tt0167260"
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await Promise.all(
        movieList.map(async (id) => {
          const res = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
          );
          return res.json();
        })
      );

      setMovies(results);
    };

    fetchMovies();
  }, []);

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-heading">Featured Today</h2>

        <div className="poster-row">
          {movies.map((movie, index) => (
            <img
              key={index}
              src={movie.Poster}
              alt={movie.Title}
              className="poster"
            />
          ))}
        </div>

        <h3 className="feature-title">Top movies to watch</h3>
        <p className="feature-link">Browse these IMDb collections →</p>
      </div>
    </section>
  );
}

export default Features;