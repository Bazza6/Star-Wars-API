import { useEffect, useState } from "react";


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


    console.log("useState piloti", piloti);

    let displayPiloti = piloti.map(pilota => <p>{pilota.name}</p>)



    return (
        <div>
            <p>PILOTI:</p>
            <p>{piloti.length > 0 && displayPiloti}</p>
        </div>
    )
}

export default Pilots;