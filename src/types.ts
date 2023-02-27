export interface PosterProps {
    name : string,
    cover: string,
    key : string,
    id : string,
}

export interface IPlanet { //planet ID can be inferred from place in array, or end of url
    name: string;
    diameter: string;
    terrain: string;
    population: string;
    residents: string[];
    films: string[];
    url: string;
    key: string;
}

export interface IFilm {
    title: string;
    key: string;
}

export interface IResident {
    name: string;
    key: string;
}