import DisplayStarships from "../components/DisplayStarships";

function Main(props) {



    function previousPage() {
        fetch(`${props.starships.previous}`)
            .then(res => res.json())
            .then(res => props.setStarships(res));
    }
    function nextPage() {
        fetch(`${props.starships.next}`)
            .then(res => res.json())
            .then(res => props.setStarships(res));
    }

    return (
        <div>
            <button onClick={previousPage}>previous</button>
            <button onClick={nextPage}>next</button>

            <DisplayStarships data={props.starships.results} /> {/* pasamos solo el array con las starships */}
        </div>

    )
}

export default Main;