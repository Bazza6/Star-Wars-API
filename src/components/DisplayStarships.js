import { Link } from "react-router-dom";

function DisplayStarships(props) {


    let displayStarships = props.data.map(starship => { // aqui hago el MAP


        let ID = starship.url.slice(32);
        ID = ID.slice(0, -1);

        return (
            <div>
                <div className="starCard">
                    <h3>{starship.name}</h3>
                    <p>{starship.model}</p>
                    {/* <Link key={ID} to={`/starship/${ID}`}>more info</Link> */}
                    <Link key={ID} to={`/starship/${ID}`}
                        state={{
                            name: starship.name

                        }}>more info</Link>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>STARSHIPS</h1>
            {displayStarships}
        </div>
    )
}

export default DisplayStarships;