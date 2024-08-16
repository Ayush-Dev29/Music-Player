import React from 'react';
import Navbar from './components/Navbar';
import SongCard from './components/SongCard';
import PlayerBar from './components/PlayerBar';
import PlaylistOverlay from './components/PlaylistOverlay';
import { searchSongs } from './services/api-client';
import { useOverlay } from './modules/Overlay';
import { usePlayPause } from './modules/playPause';
import './App.css';

const App = () => {
    const [songs, setSongs] = React.useState([]);
    const { playlist, addToPlaylist, removeFromPlaylist, isPlaylistVisible, togglePlaylist } = useOverlay();
    const { playingSong, playPauseSong, stopPlayingSong, isPaused } = usePlayPause();

    const handleSearch = async (query) => {
        const results = await searchSongs(query);
        setSongs(results);
    };

    return (
        <div className="app">
            <Navbar onSearch={handleSearch} />
            <div className="main-page">
                <button className="show-playlist-button" onClick={togglePlaylist}>
                    {isPlaylistVisible ? 'Hide Playlist' : 'Show Playlist'}
                </button>
                <div className="song-list">
                    {songs.map(song => (
                        <SongCard
                            key={song.trackId}
                            song={song}
                            onPlayPause={() => playPauseSong(song)}
                            onAddToPlaylist={() => addToPlaylist(song)}
                            isPlaying={playingSong?.trackId === song.trackId && !isPaused}
                        />
                    ))}
                </div>
            </div>
            {playingSong && <PlayerBar song={playingSong} onPause={stopPlayingSong} />}
            {isPlaylistVisible && <PlaylistOverlay playlist={playlist} onClose={togglePlaylist} onRemove={removeFromPlaylist} />}
        </div>
    );
};

export default App;
