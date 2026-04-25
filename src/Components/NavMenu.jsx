
import React from "react";

export default function NavMenu({ closeMenu }) {
    const handleDummyLink = (e) => {
        e.preventDefault();
    };

    return (
        <div className="imdb-menu-overlay">
            <div className="menu-container">
                <div className="menu-header">
                    <div className="logo-placeholder">IMDb</div>
                    <button className="close-menu" onClick={closeMenu}>✕</button>
                </div>
                
                <div className="menu-grid">
                    <div className="menu-column">
                        <div className="menu-category">
                            <h2><span className="yellow-icon">🎬</span> Movies</h2>
                            <ul>
                                <li><a href="/" onClick={handleDummyLink}>Release calendar</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Top 250 movies</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Most popular movies</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Browse movies by genre</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Top box office</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Showtimes & tickets</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Movie news</a></li>
                                <li><a href="/" onClick={handleDummyLink}>India movie spotlight</a></li>
                            </ul>
                        </div>
                        <div className="menu-category">
                            <h2><span className="yellow-icon">👥</span> Celebs</h2>
                            <ul>
                                <li><a href="/" onClick={handleDummyLink}>Born today</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Most popular celebs</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Celebrity news</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-column">
                        <div className="menu-category">
                            <h2><span className="yellow-icon">🖥️</span> TV shows</h2>
                            <ul>
                                <li><a href="/" onClick={handleDummyLink}>What's on TV & streaming</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Top 250 TV shows</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Most popular TV shows</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Browse TV shows by genre</a></li>
                                <li><a href="/" onClick={handleDummyLink}>TV news</a></li>
                            </ul>
                        </div>
                        <div className="menu-category">
                            <h2><span className="yellow-icon">▶️</span> Watch</h2>
                            <ul>
                                <li><a href="/" onClick={handleDummyLink}>What to watch</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Latest trailers</a></li>
                                <li><a href="/" onClick={handleDummyLink}>IMDb Originals</a></li>
                                <li><a href="/" onClick={handleDummyLink}>IMDb Picks</a></li>
                                <li><a href="/" onClick={handleDummyLink}>IMDb Spotlight</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Family entertainment guide</a></li>
                                <li><a href="/" onClick={handleDummyLink}>IMDb Podcasts</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-column">
                        <div className="menu-category">
                            <h2><span className="yellow-icon">⭐</span> Awards & events</h2>
                            <ul>
                                <li><a href="/" onClick={handleDummyLink}>Oscars</a></li>
                                <li><a href="/" onClick={handleDummyLink}>SXSW Film Festival</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Women's History Month</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Most Anticipated</a></li>
                                <li><a href="/" onClick={handleDummyLink}>STARmeter Awards</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Awards Central</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Festival Central</a></li>
                                <li><a href="/" onClick={handleDummyLink}>All events</a></li>
                            </ul>
                        </div>
                        <div className="menu-category">
                            <h2><span className="yellow-icon">🌍</span> Community</h2>
                            <ul>
                                <li><a href="/" onClick={handleDummyLink}>Help center</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Contributor zone</a></li>
                                <li><a href="/" onClick={handleDummyLink}>Polls</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}