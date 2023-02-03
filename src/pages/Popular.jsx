import { React, useEffect, useState } from 'react';
import SmallCard from '../components/SmallCard';
import axios from 'axios'


function Popular() {

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fa73fc5e116e4f5899e71120fa20d4de&language=tr-TR&page=1')
            .then(res => { setMovies(res.data.results); console.log(res.data.results) })
        /* bu buna değişecek */
        /*https://api.themoviedb.org/3/trending/movie/day?api_key=fa73fc5e116e4f5899e71120fa20d4d */
    }, [])

    const [movies, setMovies] = useState([]);

    return (
        <div className='popular'>
            {movies.map((movie) => {
                const { original_title, id, release_date, title, vote_average, poster_path } = movie;
                return <SmallCard
                    key={id}
                    original_title={original_title}
                    release_date={release_date}
                    title={title}
                    vote_average={vote_average}
                    poster_path={poster_path}
                    id={id} />
            })}
        </div>
    )
}

export default Popular