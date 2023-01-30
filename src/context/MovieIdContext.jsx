import { React, createContext } from 'react';

const movieIdContext = createContext(null);
function MovieIdContext(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export { MovieIdContext, movieIdContext }