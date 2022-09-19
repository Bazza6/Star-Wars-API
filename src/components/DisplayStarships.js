import CardSmall from "./CardSmall";

function DisplayStarships(props) {

    let displayStarships = props.data.map(starship => {
        return (
            <div>
                <CardSmall starship={starship} />
            </div>
        )
    });

    return (
        <div>
            <h2>STARSHIPS</h2>
            {displayStarships}
        </div>
    )
}

export default DisplayStarships;