import { useEffect, useState } from "react";
import { Styled_PilotsAndMoviesCard } from "../styled-component/styled";


function Movies(props) {

    let [movies, setMovies] = useState([])

    useEffect(() => {
        props.arrayMoviesURL.map(movieURL => {
            fetch(movieURL)
                .then(res => res.json())
                .then(res => setMovies(prev => [...prev, res]));
        });
    }, []);

    let displayMovies = movies.map(movie => <p>{movie.title}</p>)

    return (
        <Styled_PilotsAndMoviesCard>
            <p>MOVIES:</p>
            <p>{movies.length > 0 && displayMovies}</p>
        </Styled_PilotsAndMoviesCard>
    )
}

export default Movies;