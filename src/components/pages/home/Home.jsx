import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../common/cardMovie/CardMovie';
import "./Home.css"
import Header from '../../common/header/Header';
import { Button } from '@mui/material';
import CardMovieModal from '../../common/cardMovieModal/CardMovieModal';
const Home = () => {
  const [movies, setMovies] = useState([])
  const [dispatchRecom, setDispatchRecom] = useState(false)
  const [recommended, setRecommended] = useState(false)
  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button onClick={handleOpen}>Open modal</Button>
      <CardMovieModal open={open} handleClose={handleClose}/>
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