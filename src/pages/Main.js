import { useState, useEffect } from "react"


function Home() {

    let [starships, setStarships] = useState([]);
    // en el state starships guardo todos los datos de las naves o solo los parametros que voy a usar?



    useEffect(() => {
        fetch("https://swapi.dev/api/starships/")
            .then(res => res.json())
            .then(res => setStarships(res.results));
    }, []);

    let displayStarships = starships.map(starship => <div className="starCard"><h3>{starship.name}</h3><p>{starship.model}</p></div>)


    return (
        <main>
            <h1>Starships</h1>
            {displayStarships}
        </main>

    )
}

export default Home;