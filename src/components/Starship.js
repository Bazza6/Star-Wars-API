import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Styled_Card, Styled_Img, Styled_ContainerDetails } from "../styled-component/styled";
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
                <Styled_ContainerDetails>
                    <Pilots arrayPilotsURL={location.state.pilots} />
                    <Movies arrayMoviesURL={location.state.movies} />
                </Styled_ContainerDetails>

            </Styled_Card>

        </div >
    )
}

export default Starship;