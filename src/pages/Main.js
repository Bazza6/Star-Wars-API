import { useState, useEffect } from "react"
import DisplayStarships from "../components/DisplayStarships";
import { Styled_ButtonContainer, Styled_Button } from "../styled-component/styled";


function Main() {

    let [starships, setStarships] = useState({
        "count": 0,
        "next": null,
        "previous": null,
        "results": [],
    })

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

            <DisplayStarships arrayStarships={starships.results} /> {/* pasamos solo el array con las starships */}

            {starships.results.length != 0 && <Styled_ButtonContainer >
                <Styled_Button onClick={previousPage}>{'< '}prev</Styled_Button>
                <Styled_Button onClick={nextPage}>next{' >'}</Styled_Button>
            </Styled_ButtonContainer>}

        </div >

    )
}

export default Main;