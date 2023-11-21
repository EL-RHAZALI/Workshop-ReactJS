import React, { useState } from 'react';
import MovieCard from './MovieCard';
import MoviesList from './MovieList';
import Filter from './Filter';



function App (){
const movies = [{
  Titel : "Hitman",
  Discription : "jhbhuvkjbcxjhv",
  PosterUrl : "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg",
  Rating : 4
},
{
  Titel : "Wolverine",
  Discription : "jhbhuvkjbcxjhv",
  PosterUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg",
  Rating : 3
},
{
  Titel : "Harry Potter",
  Discription : "jhbhuvkjbcxjhv",
  PosterUrl : "https://timesofindia.indiatimes.com/photo/68497202.cms",
  Rating : 4.5
},
{
  Titel : "xXx",
  Discription : "jhbhuvkjbcxjhv",
  PosterUrl : "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  Rating : 4
}
];

const [filmName , setFilmName] = useState("");
const filterMovie = ()=>{
  return movies.filter((movie) => movie.Titel.includes(filmName));
}


return(
<div>
  <Filter filmName={filmName} 
  changeFilter = {setFilmName}
  />
  <MoviesList movies={filterMovie()}/>
</div>
)
}

export default App;