import { Character } from './java_files/characters/characters.js'

export async function fetchCharacter(id: string): Promise<Character> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();

        const { name, status, species, gender, origin, image, episode } = data;

        return { name, status, species, gender, origin, image, episode } as Character;
    } catch (error) {
        console.error(error);
        throw new Error("It couldn't get the character");
    }
}
