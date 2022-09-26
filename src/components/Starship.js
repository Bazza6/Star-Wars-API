import { useLocation, useParams } from "react-router-dom";


function Starship() {


    const { ID } = useParams()
    const location = useLocation()
    console.log("location", location.state);

    const rutaImg = `https://starwars-visualguide.com/assets/img/starships/${ID}.jpg`;

    return (
        <div>
            <img src={rutaImg} alt="imagen no encotrada :(" />
            <h2>{location.state.name}</h2>
        </div>
    )
}

export default Starship;