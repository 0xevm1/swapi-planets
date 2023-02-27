import {FC, useEffect, useState} from "react";
import {IResident} from "../types";

interface IProps {
    url: string;
}

export const Resident: FC<IProps> = ({url}) => {
    const [resident, setResident] = useState<IResident>({name: "...", key: ""});

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((results) => {
                setResident(results);
                //results.results
            })
            .catch((err) => console.log(err.message))
        // eslint-disable-next-line
    }, []);

    return (
        <li className="catalogue-button">{resident.name}</li>
    )
}