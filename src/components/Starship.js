import { useLocation, useParams } from "react-router-dom";


function Starship() {


    const { ID } = useParams()
    const location = useLocation()
    console.log("location", location.state);
    console.log("ID", ID);
    const rutaImg = `https://starwars-visualguide.com/assets/img/starships/${ID}.jpg`;

    return (
        <div>
            <img src={rutaImg} alt="imagen no encotrada :(" />
            <h2>{location.state.name}</h2>
            <p>{ID}</p>
        </div>
    )
}

export default Starship;