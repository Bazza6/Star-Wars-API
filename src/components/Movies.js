import { useEffect, useState } from "react";
import { Styled_MoviesCard } from "../styled-component/styled";


function Movies(props) {

    let [movies, setMovies] = useState([])
    //console.log(props.arrayPilotsURL);

    useEffect(() => {

        props.arrayMoviesURL.map(movieURL => {
            fetch(movieURL)
                .then(res => res.json())
                .then(res => setMovies(prev => [...prev, res]));
        });
    }, []);


    //console.log("useState piloti", piloti);

    let displayMovies = movies.map(movie => <p>{movie.title}</p>)



    return (
        <Styled_MoviesCard>
            <p>MOVIES:</p>
            <p>{movies.length > 0 && displayMovies}</p>
        </Styled_MoviesCard>
    )
}

export default Movies;