import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";


function App() {


  // en el state starships guardo todos los datos de las naves o solo los parametros que voy a usar?

  let [starships, setStarships] = useState([]);



  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then(res => res.json())
      .then(res => setStarships(res.results));
  }, []);

  let displayStarships = starships.map(starship => <div className="starCard"><h3>{starship.name}</h3><p>{starship.model}</p></div>)

  return (
    <>
      <Navbar />
      <h1>Starships</h1>
      {displayStarships}
    </>
  );
}

export default App;
