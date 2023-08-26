import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';



const CardMovie = ({movie, handleRecom, deleteMovie}) => {
  return (
    <Card sx={{ width: 300, height: 500}}>
    <CardHeader

      title={movie.name}
      subheader={movie.createdAt}
    />
    <CardMedia
      component="img"
      height="180"
      image={movie.img}
      alt={movie.name}
    />
    <CardContent sx={{height: 170, overflowY: 'auto'}}>
    <style>
    {`
      ::-webkit-scrollbar {
        width: 0.5em; 
      }
      ::-webkit-scrollbar-thumb {
        background-color: transparent; 
      }
    `}
  </style>
      <Typography variant="body2" color="text.secondary">
        {movie.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing sx={{display:'flex', justifyContent:"space-between"}}>
      <IconButton aria-label="add to recomended" onClick={()=>handleRecom(movie)}>
        <StarIcon color={movie.isRecommended ? 'primary' : 'disabled'} 
        />
      </IconButton>
      <IconButton onClick={()=>{deleteMovie(movie.id)}}>
        <CloseIcon color='error' />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default CardMovie