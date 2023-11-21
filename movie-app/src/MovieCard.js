import React from 'react';


function CardMovie ({movie}){
    
    return(
        <div>
        <h1>{movie.Titel}</h1>
        <img src={movie.PosterUrl} alt='jhbsdugsyc'/>
        <p>{movie.Discription}</p>
        <p>{movie.Rating}</p>
        </div>
    )
}
export default CardMovie;