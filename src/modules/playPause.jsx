import { useState, useEffect } from 'react';

export const usePlayPause = () => {
    const [playingSong, setPlayingSong] = useState(null);
    const [audio, setAudio] = useState(null);
    const [isPaused, setIsPaused] = useState(true);

    const playPauseSong = (song) => {
        if (playingSong && audio) {
            if (playingSong.trackId === song.trackId) {
                if (isPaused) {
                    audio.play();
                    setIsPaused(false);
                } else {
                    audio.pause();
                    setIsPaused(true);
                }
            } else {
                audio.pause();
                const newAudio = new Audio(song.previewUrl);
                newAudio.play();
                setAudio(newAudio);
                setPlayingSong(song);
                setIsPaused(false);
            }
        } else {
            const newAudio = new Audio(song.previewUrl);
            newAudio.play();
            setAudio(newAudio);
            setPlayingSong(song);
            setIsPaused(false);
        }
    };

    const stopPlayingSong = () => {
        if (audio) {
            audio.pause();
            setPlayingSong(null);
            setIsPaused(true);
        }
    };

    useEffect(() => {
        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, [audio]);

    return {
        playingSong,
        playPauseSong,
        stopPlayingSong,
        isPaused
    };
};
