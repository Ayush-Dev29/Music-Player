import { useState } from 'react';

export const useOverlay = () => {
    const [playlist, setPlaylist] = useState([]);
    const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

    const addToPlaylist = (song) => {
        setPlaylist((prevPlaylist) => {
            if (!prevPlaylist.some(item => item.trackId === song.trackId)) {
                return [...prevPlaylist, song];
            }
            return prevPlaylist;
        });
    };

    const removeFromPlaylist = (songId) => {
        setPlaylist((prevPlaylist) => prevPlaylist.filter(song => song.trackId !== songId));
    };

    const togglePlaylist = () => {
        setIsPlaylistVisible(!isPlaylistVisible);
    };

    return {
        playlist,
        addToPlaylist,
        removeFromPlaylist,
        isPlaylistVisible,
        togglePlaylist
    };
};

