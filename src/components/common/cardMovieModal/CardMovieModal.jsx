import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px'
  
};

const CardMovieModal = ({open,handleClose,setMovieCreate}) => {
  
  let initialValues = {
    name: "",
    description:"",
    createdAt:"",
    img:""
  }

  const onSubmit = (data) => {
    
    let arg = {
      name:"data.name",
      description:'data.description',
      createdAt:"data.createdAt",
      img:'data.img',
      isRecommended: false
    }

    axios.post("http://localHost:5000/movies", arg)
      .then( res => {handleClose(), setMovieCreate(true)})
      .catch(error => console.log(error))
  }

const { handleChange, handleSubmit } = useFormik({
  initialValues,
  // validationSchema,
  onSubmit
})

  return (
    <div>
      
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent:'space-evenly',
          alignItems:'center',
          height:'400px'
        }}
        onSubmit={handleSubmit}
        >
          <Typography variant='h6' color="primary" > Agregar pelicula</Typography>
          <TextField id="name" label="Nombre de la pelicula" variant="outlined" fullWidth name="name" onChange={handleChange}/>
          <TextField id="recomm" label="Reseña" variant="outlined" fullWidth name="description" onChange={handleChange}/>
          <TextField id="img" label="Link imagen de la pelicula" variant="outlined" fullWidth name="img" onChange={handleChange}/>
          <TextField id="createdAt" label="Fecha de estreno" variant="outlined" fullWidth name="createdAt" onChange={handleChange}/>
          <Button variant='outlined' type='submit' > Agregar </Button>
        </form>
      </Box>
    </Modal>
  </div>
  )
}

export default CardMovieModal