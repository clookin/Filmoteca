import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../common/cardMovie/CardMovie';
import "./Home.css"
import Header from '../../common/header/Header';
const Home = () => {
  const [movies, setMovies] = useState([])
  const [dispatchRecom, setDispatchRecom] = useState(false)
  const [recommended, setRecommended] = useState(false)

  useEffect (()=>{
    axios.get("http://localHost:5000/movies")
      .then(res => setMovies(res.data))
      .catch(error => console.log(error))

      setDispatchRecom(false)
  }, [dispatchRecom, ]);

  const handleRecom = (movie) => {
    axios.patch(`http://localHost:5000/movies/${movie.id}`, {isRecommended: !movie.isRecommended})
    .then(res => setDispatchRecom(true))
    .catch(error => console.log(error));
  };

  const moviesRecomFilter = movies.filter( movie => movie.isRecommended)
  
  return (
    <>
      <Header setRecommended={setRecommended}/>
      <div className='mainContainer'>
        {
          !recommended ? (
            movies.map((movie)=>{
              return(
                <CardMovie movie= {movie} key={movie.id} handleRecom={handleRecom}/>
              )
            }) 
          ) : (
            moviesRecomFilter.map((movie)=>{
              return(
                <CardMovie movie= {movie} key={movie.id} handleRecom={handleRecom}/>
              )
            })
          )
        }

      </div>
    </>
  )
};

export default Home