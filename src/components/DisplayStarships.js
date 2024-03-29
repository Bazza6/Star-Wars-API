import { Styled_P, Styled_Link, Styled_H3, Styled_SmallCard } from "../styled-component/styled";

function DisplayStarships(props) {

    let displayStarships = props.arrayStarships.map(starship => { // aqui hago el MAP

        let ID = starship.url.slice(32, -1);

        return (
            <Styled_SmallCard>
                <Styled_Link key={ID}
                    to={`/starship/${ID}`}
                    state={{
                        name: starship.name,
                        pilots: starship.pilots,
                        movies: starship.films,
                        manufacturer: starship.manufacturer,
                        cost_in_credits: starship.cost_in_credits,
                        length: starship.length,
                        passengers: starship.passengers,
                        cargo_capacity: starship.cargo_capacity,
                        hyperdrive_rating: starship.hyperdrive_rating,
                        max_atmosphering_speed: starship.max_atmosphering_speed
                    }}>
                    <>
                        <Styled_H3>{starship.name.toUpperCase()}</Styled_H3>
                        <Styled_P>{starship.model}</Styled_P>
                    </>
                </Styled_Link>
            </Styled_SmallCard>
        )
    })

    return (
        <div>
            {displayStarships}
        </div>
    )
}

export default DisplayStarships;