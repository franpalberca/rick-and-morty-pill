import { Result } from './java_files/Episodes/episodes.js';

export async function fetchEpisodes(id: string): Promise<Result> {
try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const data = await response.json();

    const { name, air_date, episode } = data;

    const episodeObj: Result = { name, air_date, episode };

    return episodeObj;
    } catch (error) {
    console.error('Error fetching Episode:', error);
    throw error;
    }
}