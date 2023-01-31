import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { movieIdContext } from '../context/MovieIdContext';

function SmallCard(props) {

    const color = props.vote_average <= 7 ? "#BF0000" : "73AC70";
    const navigate = useNavigate();
    const handleOnClick = () => {
        setMovieID(props.id)
        navigate(`/movie/${props.id}`, { replace: true })
    }
    /* eslint-disable */
    const { movieID, setMovieID } = useContext(movieIdContext)

    return (
        <div className='small-card' onClick={handleOnClick}>
            <div className="small-card-img">
                <img loading="lazy" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.poster_path}`} alt="" />
            </div>
            <div className="small-card-content">
                <div className="title-area">
                    <h3>{props.title}</h3>
                    <h5>({props.original_title})</h5>
                </div>
                <div className="details-area">
                    <p><span>Çıkış Tarihi:</span> {props.release_date}</p>
                    <p className='vote'><span>Ort. Puan:</span> <p style={{ color: color }}>{props.vote_average}</p></p>
                </div>
            </div>
        </div>
    )
}

export default SmallCard