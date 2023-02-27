import React, {useEffect, useState} from "react";
import {IPlanet} from "../types";
import {Link} from "react-router-dom";
import {FaGithub} from "react-icons/fa";

const PlanetList = () => {
    const [planets, setPlanets] = useState<IPlanet[]>([]);

    useEffect(()  => {
        fetch("https://swapi.dev/api/planets/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
                    setPlanets(result.results);
                })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (

            <div className="App">
                <div className="starwars-entries">
                    <div id='poster'>
                        {planets.map((planet: IPlanet, index) => (
                            <Link to={`${index+1}`} state={{name:planet.name, films:planet.films, residents:planet.residents, population: planet.population, terrain:planet.terrain, id: index+1}} key={planet.name}>
                                <li
                                    key={planet.name}
                                    className="planet-button">
                                    {planet.name}
                                </li>
                            </Link>
                        ))}
                    </div>
                    <br/><br/>

                    <p><Link className="credit" to="https://github.com/0xevm1">designed by 0xEVM1 <FaGithub /></Link></p>

                </div>
            </div>

    )
}

export default PlanetList;