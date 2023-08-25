import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'


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

const CardMovieModal = ({open,handleClose}) => {
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
        }}>
          <Typography variant='h6' color="primary" > Agregar pelicula</Typography>
          <TextField id="name" label="Nombre de la pelicula" variant="outlined" fullWidth/>
          <TextField id="recomm" label="Reseña" variant="outlined" fullWidth/>
          <TextField id="img" label="Link imagen de la pelicula" variant="outlined" fullWidth/>
          <TextField id="createdAt" label="Fecha de estreno" variant="outlined" fullWidth/>
          <Button variant='outlined'> Agregar </Button>
        </form>
      </Box>
    </Modal>
  </div>
  )
}

export default CardMovieModal