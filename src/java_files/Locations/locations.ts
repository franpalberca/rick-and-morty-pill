export interface Result {
    created:   Date;
    dimension: string;
    id:        number;
    name:      string;
    residents: string[];
    type:      string;
    url:       string;
}

export interface Location {
    name: string;
    type: LocationType;
    dimension: string;
    residents: [];
}

export enum LocationType {
    planet = "Planet",
    Custom = "Custom",
    Dimension = "Dimension",
    spaceStation = "Space Station",
    Game = "Game",
    TV = "TV",
    CitadelofRicks = "Citadel of Ricks",
    Resort = "Resort",
    FantasyTown = "Fantasy Town",
    Dream = "Dream",
    Microverse = "Microverse",
    Menagerie = "Menagerie",
    unknown = "Unknown"
}
