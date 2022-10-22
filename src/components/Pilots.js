import { useEffect, useState } from "react";
import { Styled_PilotsAndMoviesCard } from "../styled-component/styled";


function Pilots(props) {

    let [piloti, setPiloti] = useState([])
    console.log(props.arrayPilotsURL);

    useEffect(() => {
        props.arrayPilotsURL.map(pilotURL => {
            fetch(pilotURL)
                .then(res => res.json())
                .then(res => setPiloti(prev => [...prev, res]));
        });
    }, []);

    let displayPiloti = piloti.map(pilota => <p>{pilota.name}</p>)

    return (
        <Styled_PilotsAndMoviesCard>
            <p>PILOTOS:</p>
            <p>{piloti.length > 0 && displayPiloti}</p>
        </Styled_PilotsAndMoviesCard>
    )
}

export default Pilots;