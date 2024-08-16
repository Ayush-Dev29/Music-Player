import React from 'react';
import './SongCard.css';

const SongCard = ({ song, onPlayPause, onAddToPlaylist, isPlaying }) => {
    return (
        <div className="song-card">
            <img src={song.artworkUrl100} alt={song.trackName} className="album-cover" />
            <div className="song-info">
                <p className="song-name">{song.trackName}</p>
                <p className="artist-name">{song.artistName}</p>
            </div>
            <div className="song-card-buttons">
                <button onClick={onPlayPause} className="play-button">
                    {isPlaying ? '◼' : '▶'}
                </button>
                <button onClick={onAddToPlaylist} className="add-to-playlist-button">Add to Playlist</button>
            </div>
        </div>
    );
}

export default SongCard;
