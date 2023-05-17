export interface RootObject {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    next:  string;
    pages: number;
    prev:  null;
}

export interface Result {
    created:   Date;
    dimension: string;
    id:        number;
    name:      string;
    residents: string[];
    type:      string;
    url:       string;
    air_date: string;
    episode: string;
}
