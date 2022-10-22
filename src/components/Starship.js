import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Styled_Card, Styled_Img, Styled_ContainerDetails, Styled_Container } from "../styled-component/styled";
import notAvaiable from "./img/image-no-avaiable.jpeg";
import Movies from "./Movies";
import Pilots from "./Pilots";


function Starship() {

    const { ID } = useParams()
    const location = useLocation()
    const [imgSrc, setImgSrc] = useState(`https://starwars-visualguide.com/assets/img/starships/${ID}.jpg`);

    console.log("location", location)

    const handleError = () => setImgSrc(notAvaiable);

    return (
        <div>
            <Styled_Card>
                {console.log("location", location)}

                <Styled_Img src={imgSrc} alt="image not found"
                    onError={handleError} >

                </Styled_Img>
                <h2>{location.state.name.toUpperCase()}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    <p>manufacturer: {location.state.manufacturer}</p>
                    <Styled_ContainerDetails>
                        <div style={{ width: "100%" }}>
                            <p>cost_in_credits: {location.state.cost_in_credits}</p>
                            <p>length: {location.state.length}</p>
                            <p>hyperdrive_rating: {location.state.hyperdrive_rating}</p>
                        </div>
                        <div style={{ width: "100%" }}>
                            <p>passengers: {location.state.passengers}</p>
                            <p>cargo_capacity: {location.state.cargo_capacity}</p>
                            <p>max_atmosphering_speed: {location.max_atmosphering_speed}</p>
                        </div>
                    </Styled_ContainerDetails>

                </p>
                <Styled_ContainerDetails>
                    <Pilots arrayPilotsURL={location.state.pilots} />
                    <Movies arrayMoviesURL={location.state.movies} />
                </Styled_ContainerDetails>

            </Styled_Card>

        </div >
    )
}

export default Starship;