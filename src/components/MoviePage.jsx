import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { movieIdContext } from '../context/MovieIdContext';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from './SmallCard';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1200, min: 700 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1
    }
};

function MoviePage() {
    /* eslint-disable */
    const { movieID, setMovieID } = useContext(movieIdContext)
    const [movieDetails, setMovieDetails] = useState([]);
    const [recommendation, setRecommendation] = useState([]);
    /*https://api.themoviedb.org/3/movie/{movie_id}?api_key=fa73fc5e116e4f5899e71120fa20d4d&language=tr-TR */
    /*https://api.themoviedb.org/3/movie/536554?api_key=fa73fc5e116e4f5899e71120fa20d4d&language=tr-TR */ /*fa73fc5e116e4f5899e71120fa20d4de */
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=fa73fc5e116e4f5899e71120fa20d4de&language=tr-TR`)
            .then(res => { setMovieDetails(res.data) });

        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=fa73fc5e116e4f5899e71120fa20d4de&language=en-US&page=1`)
            .then(res => setRecommendation(res.data.results))

    }, [movieID])
    let dollar = Intl.NumberFormat("en-US")
    const color = movieDetails.vote_average <= 7 ? "#BF0000" : "#73AC70"
    return (
        <div className='movie-page'>
            <div className='movie-wrapper'>
                <div className="movie-img">
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieDetails.poster_path}`} alt="" />
                </div>
                <div className="movie-details">
                    <div className="title-area">
                        <div className="titles">
                            <h1>{movieDetails.original_title}</h1>
                            <h2>TR: {movieDetails.title}</h2>
                        </div>
                        <div className="rank">
                            <p style={{ color: color }}>{movieDetails.vote_average}</p>
                        </div>
                    </div>
                    <div className="detail-content">
                        <div className="overview-area">
                            <p>{movieDetails.overview === "" ? "No overview" : movieDetails.overview}</p>
                        </div>
                        <div className="info-area">
                            <p>Status: {movieDetails.status}</p>
                            <p>Release Date: {movieDetails.release_date}</p>
                            <p>Budget: {dollar.format(movieDetails.budget)}$</p>
                            <p>Revenue: {dollar.format(movieDetails.revenue)}$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recommend-header'>
                <h1>Recommended Movies</h1>
            </div>
            <Carousel className='slider' responsive={responsive}
                autoPlaySpeed={2000}
                autoPlay={true}
                infinite={true}
            >

                {recommendation.map((movie) => {
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
            </Carousel>
        </div>
    )
}

export default MoviePage