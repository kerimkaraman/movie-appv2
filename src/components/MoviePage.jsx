import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { movieIdContext } from '../context/MovieIdContext';

function MoviePage() {
    const { movieID, setMovieID } = useContext(movieIdContext)
    const [movieDetails, setMovieDetails] = useState([]);
    /*https://api.themoviedb.org/3/movie/{movie_id}?api_key=fa73fc5e116e4f5899e71120fa20d4d&language=tr-TR */
    /*https://api.themoviedb.org/3/movie/536554?api_key=fa73fc5e116e4f5899e71120fa20d4d&language=tr-TR */ /*fa73fc5e116e4f5899e71120fa20d4de */
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=fa73fc5e116e4f5899e71120fa20d4de&language=tr-TR`)
            .then(res => { setMovieDetails(res.data) })
    }, [])
    let dollar = Intl.NumberFormat("en-US")
    const color = movieDetails.vote_average <= 7 ? "#BF0000" : "#73AC70"
    return (

        <div className='movie-page'>
            {
                console.log(movieDetails)
            }
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
    )
}

export default MoviePage