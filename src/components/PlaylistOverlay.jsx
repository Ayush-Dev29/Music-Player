import React from 'react';
import './PlaylistOverlay.css';

const PlaylistOverlay = ({ playlist, onClose, onRemove }) => {
    return (
        <div className="playlist-overlay">
            <button className="close-button" onClick={onClose}>X</button>
            <h2>Playlist</h2>
            {playlist.map(song => (
                <div key={song.trackId} className="playlist-song">
                    <img src={song.artworkUrl100} alt={song.trackName} className="album-cover" />
                    <div className="song-info">
                        <p className="song-name">{song.trackName}</p>
                        <p className="artist-name">{song.artistName}</p>
                    </div>
                    <button className="remove-button" onClick={() => onRemove(song.trackId)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default PlaylistOverlay;
