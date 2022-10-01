// parece que pasan cosas raras (desaparece el background y tambine el logo del navbar)
// cuando cargo aqui componentes de style-component o simplemente pongo estilos con className


import { useLocation, useParams } from "react-router-dom";
import { Styled_Card, Styled_Img } from "../styled-component/styled";

function Starship() {


    const { ID } = useParams()
    const location = useLocation()
    console.log("location", location)
    const rutaImg = `https://starwars-visualguide.com/assets/img/starships/${ID}.jpg`;

    return (
        <div>
            <Styled_Card>

                <Styled_Img src={rutaImg} alt="imagen no encotrada :(" >

                </Styled_Img>
                <h2>{location.state.name}</h2>
            </Styled_Card>

        </div >
    )
}

export default Starship;