import { React, useEffect, useState } from 'react';
import SmallCard from '../components/SmallCard';
import axios from 'axios';

function TopRated() {

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fa73fc5e116e4f5899e71120fa20d4de&language=tr-TR&page=1')
            .then(res => setMovies(res.data.results))
    }, [])

    const [movies, setMovies] = useState([]);
    return (
        <div className='top-rated'>
            {movies.map((movie) => {
                const { original_title, id, release_date, title, vote_average, poster_path } = movie;
                return <SmallCard
                    key={id}
                    original_title={original_title}
                    release_date={release_date}
                    title={title}
                    vote_average={vote_average}
                    poster_path={poster_path}
                    id={id}
                />
            })}
        </div>
    )
}

export default TopRated