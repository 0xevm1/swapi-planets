import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {IPlanet} from "../types";
import {Film} from "../Components/Film";
import {Resident} from "../Components/Resident";

const Planet = () => {
    const [planet, setPlanet] = useState<IPlanet>({name: "Loading...", diameter: "0", terrain: "scanning", population: "0", residents: [], films: [], url: "", key: ""});
    const { id } = useParams();

    //if no props, pull from server based on id, if props render information
    //on second thought: pull everything from server, since additional server calls are necessary to get relationship information
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/" + id)
                .then(res => res.json())
                .then((result) => {
                    setPlanet(result);
                });
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <div className="planet">
                <div className="planet-button">{planet.name}</div>
                {planet.films.length > 0 &&
                    <h2 className="stats">🎬 Films</h2>
                }

                {planet.films.map((url) => (
                    <Film
                        key={url}
                        url={url} />
                ))}

                {planet.residents.length > 0 &&
                    <h2 className="stats">👤 Residents</h2>
                }

                {planet.residents.map((url) => (
                    <Resident
                        key={url}
                        url={url} />
                ))}

            </div>
        </div>
    )

};

export default Planet;