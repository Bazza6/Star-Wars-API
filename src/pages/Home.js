//import "../starWars.css"
import { Styled_IntroAzul, Styled_P, Styled_TitleLogo, Styled_Titles, Styled_TitlesContent } from "../styled-component/styled";

function Home() {

    return (
        <>
            <Styled_IntroAzul>BENVINGUT...</Styled_IntroAzul>

            <Styled_TitleLogo>STAR WARS REACT APP</Styled_TitleLogo>

            <Styled_Titles>
                <Styled_TitlesContent>
                    <Styled_P yellow>Un proyecto hecho con Reac 18. Estilizado con Styled-Components. Enrutado con React Router v6. Testeado con Jest y React testing library</Styled_P>
                    <br />
                    <Styled_P yellow>TO DO:</Styled_P>
                    <Styled_P yellow>infinite scrolling, mobile responsive, cambiar alert por modal</Styled_P>
                    <Styled_P yellow>Este testo está estilizado a partir de <a href='http://blogs.sitepointstatic.com/examples/tech/css3-starwars/index.html'>la demo</a> de <a href='https://twitter.com/craigbuckler'>Craig Buckler</a>
                    </Styled_P>
                </Styled_TitlesContent>

            </Styled_Titles>

        </>

    )
}

export default Home;