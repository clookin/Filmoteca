import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../common/cardMovie/CardMovie';
import "./Home.css"
const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect (()=>{
    axios.get("http://localHost:5000/movies")
      .then(res => setMovies(res.data))
      .catch(error => console.log(error))
  }, []);
  
  return (
    <>
      <div className='mainContainer'>
        {
          movies.map((movie)=>{
            return(
              <CardMovie movie= {movie} key={movie.id}/>
            )
          })
        }

      </div>
    </>
  )
};

export default Home