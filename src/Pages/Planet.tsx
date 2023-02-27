import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import { IPlanet } from "../types";

const Planet = () => {
    const location = useLocation();
    const [planet, setPlanet] = useState<IPlanet>();
    const { id } = useParams();

    //if no props, pull from server based on id, if props render information
    //on second thought: pull everything from server, since additional server calls are necessary to get relationship information
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setPlanet(result);
                    planet?.films.map((filmUrls: string) => fetch(filmUrls).then(res => res.json()));
                })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    //console.log(state.props.name);



    return (
        <div className="App">
            <div className="planet">
                <div className="planet-button">{planet?.name}</div>
                <p className="stats">Films</p>

                <p className="stats">Residents</p>
            </div>
        </div>
    )

};

export default Planet;