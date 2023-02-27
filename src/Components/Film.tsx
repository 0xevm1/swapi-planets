import {FC, useEffect, useState} from "react";
import {IFilm} from "../types";
import '../App.css';

interface IProps {
    url: string;
}

export const Film: FC<IProps> = ({url}) => {
    const [film, setFilm] = useState<IFilm>({title:"...", key:""});

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((results) => {
                setFilm(results);
                //results.results
            })
            .catch((err) => console.log(err.message))
        // eslint-disable-next-line
    }, []);

    return (
        <li className="catalogue-button">{film.title}</li>
    )
}