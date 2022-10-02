import { useEffect, useState } from "react";


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
        <div>
            <p>MOVIES:</p>
            <p>{movies.length > 0 && displayMovies}</p>
        </div>
    )
}

export default Movies;