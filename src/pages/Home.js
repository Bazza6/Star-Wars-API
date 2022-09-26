import { Styled_WelcomePage, Styled_Link, Styled_H3 } from "../styled-component/styled";



function Home() {

    return (
        <Styled_WelcomePage>
            <div>

                <h1>Benvingut!</h1>
                <p>Descubre todas las naves espaciales de Star Wars</p>
                <Styled_Link to="/main">
                    <Styled_H3>ENTRA</Styled_H3>
                </Styled_Link>
            </div>
        </Styled_WelcomePage>
    )
}

export default Home;