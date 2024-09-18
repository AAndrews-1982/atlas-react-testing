import { useState, useEffect, useCallback } from 'react';

// Song data structure definition
interface Track {
    title: string;
    artist: string;
    duration: string;
    coverUrl: string;
}

// Custom hook for handling playlist data fetching and state management
export const useTrackList = () => {
    // State management for track list, currently playing track, and loading status
    const [trackList, setTrackList] = useState<Track[]>([]);
    const [activeTrackIndex, setActiveTrackIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Data fetching function wrapped in useCallback for better performance
    const loadTrackData = useCallback(async () => {
        try {
            const result = await fetch(
                'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist'
            );
            const tracks = await result.json();
            setTrackList(tracks);
        } catch (fetchError) {
            console.error('Error loading track data:', fetchError);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // useEffect hook to initiate data fetch on mount
    useEffect(() => {
        loadTrackData();
    }, [loadTrackData]);

    return {
        trackList,
        activeTrackIndex,
        setActiveTrackIndex,
        isLoading
    };
};
