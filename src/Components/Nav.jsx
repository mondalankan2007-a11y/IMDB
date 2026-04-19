import React, { useState } from "react";
import "./NavBar.css";
import NavMenu from "./NavMenu"; 

export default function Navbar() {
    const [searchText, setSearchText] = useState("");
    const [movies, setMovies] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = async (e) => {
        let val = e.target.value;
        setSearchText(val);

        const response = await fetch(
            `https://www.omdbapi.com/?s=${val}&apikey=fbb38fe4`
        );

        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="leftnav">
                <div className="logo">IMDB</div>
                <button className="menu" onClick={toggleMenu}>☰ Menu</button>
            </div>
            
            <div className="searchName">
                <select className="category">
                    <option>All</option>
                    <option>Movies</option>
                    <option>Series</option>
                </select>
                <input type="text" placeholder="Search Movie" className="searchInput" value={searchText} onChange={handleSearch} />
                <button className="searchBtn">🔍</button>
                <div className="results">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className="movie">
                            <img src={movie.Poster} alt={movie.Title} />
                            <span>{movie.Title}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='rightnav'>
                <button className="imdbpro">IMDbPro</button>
                <button>❖ Watchlist</button>
                <button>Sign In</button>
            </div>

            {isMenuOpen && <NavMenu closeMenu={toggleMenu} />}
        </nav>
    );
}