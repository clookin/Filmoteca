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
  const [movieCreate, setMovieCreate] = useState(false)
  const [movieDelete, setMovieDelete] = useState(false)


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect (()=>{
    axios.get("http://localHost:5000/movies")
      .then(res => setMovies(res.data))
      .catch(error => console.log(error))

      setDispatchRecom(false) 
      setMovieCreate(false)
      setMovieDelete(false)
  }, [dispatchRecom, movieCreate, movieDelete]);

  const handleRecom = (movie) => {
    axios.patch(`http://localHost:5000/movies/${movie.id}`, {isRecommended: !movie.isRecommended})
    .then(res => setDispatchRecom(true))
    .catch(error => console.log(error));
  };

  const moviesRecomFilter = movies.filter( movie => movie.isRecommended)
  
  const deleteMovie = (id)=> {
    axios.delete(`http://localHost:5000/movies/${id}`)
      .then (res => setMovieDelete(true))
      .catch( error => console.log(error))
  }
  return (
    <>
      <Header setRecommended={setRecommended}/>
      <Button sx={{display:'flex', justifyContent:'center', alignItems:'center', margin:'auto'}}onClick={handleOpen}>Agregar pelicula</Button>
      <CardMovieModal open={open} handleClose={handleClose} setMovieCreate={setMovieCreate} />
      <div className='mainContainer'>
        {
          !recommended ? (
            movies.map((movie)=>{
              return(
                <CardMovie movie= {movie} key={movie.id} handleRecom={handleRecom} deleteMovie={deleteMovie}/>
              )
            }) 
          ) : (
            moviesRecomFilter.map((movie)=>{
              return(
                <CardMovie movie= {movie} key={movie.id} handleRecom={handleRecom} deleteMovie={deleteMovie}/>
              )
            })
          )
        }

      </div>
    </>
  )
};

export default Home