import axios from 'axios';

export const searchSongs = async (query) => {
    try {
        const response = await axios.get(`https://itunes.apple.com/search?term=${query}&entity=song`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching songs:', error);
        return [];
    }
};
