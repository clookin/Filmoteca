import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';



const CardMovie = ({movie, handleRecom}) => {
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
    <CardActions disableSpacing>
      <IconButton aria-label="add to recomended" onClick={()=>handleRecom(movie)}>
        <StarIcon color={movie.isRecommended ? 'primary' : 'disabled'} 
        />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default CardMovie