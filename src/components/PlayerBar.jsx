import React from 'react';
import './PlayerBar.css';

const PlayerBar = ({ song }) => {
    return (
        <div className="player-bar">
            <img src={song.artworkUrl100} alt={song.trackName} className="player-album-cover" />
            <div className="player-song-info">
                <p className="player-song-name">{song.trackName}</p>
                <p className="player-artist-name">{song.artistName}</p>
            </div>
            <div className="progress-bar-container">
                <progress value="0" max="100" className="progress-bar"></progress>
            </div>
        </div>
    );
};

export default PlayerBar;

