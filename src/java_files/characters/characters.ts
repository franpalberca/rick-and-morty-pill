export interface RootObject {
    info:    Info;
    results: Character[];
}

export interface Info {
    count: number;
    next: string;
    pages: number;
    prev: null;
}
export interface Character {
    name: string;
    status: CharacterStatus;
    species: CharacterSpecies;
    gender: CharacterGender;
    origin: string;
    image: string;
    episode: []
}

export enum CharacterGender {
    Female = "Female",
    Male = "Male",
    Genderless = "Genderless",
    Unknown = "unknown",
}

export enum CharacterSpecies {
    Alien = "Alien",
    Human = "Human",
    Unknown = "unknown"
}

export enum CharacterStatus {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
