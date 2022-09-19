import { useState, useEffect } from "react"
import DisplayStarships from "../components/DisplayStarships";

function Main() {

    let [starships, setStarships] = useState({
        "count": 0,
        "next": null,
        "previous": null,
        "results": [],
    })
    // en el state starships guardo todos los datos de las naves o solo los parametros que voy a usar?

    useEffect(() => {
        fetch("https://swapi.dev/api/starships")
            .then(res => res.json())
            .then(res => setStarships(res));
    }, []);

    function previousPage() {
        fetch(`${starships.previous}`)
            .then(res => res.json())
            .then(res => setStarships(res));
    }
    function nextPage() {
        fetch(`${starships.next}`)
            .then(res => res.json())
            .then(res => setStarships(res));
    }

    return (
        <div>
            <button onClick={previousPage}>previous</button>
            <button onClick={nextPage}>next</button>

            <DisplayStarships data={starships.results} />
        </div>

    )
}

export default Main;