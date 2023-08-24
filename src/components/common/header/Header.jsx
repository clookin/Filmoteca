import { Button, Typography } from '@mui/material'
import React from 'react'

const Header = ({setRecommended}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width:  '100%',
      padding: '10px',
      alignItems: 'center',
    }}  >
      <Typography variant='h4' color="primary">Peliculas</Typography>
      <div style={{display:"flex", justifyContent:"center", gap:"10px", marginLeft:"50%"}}>
        <Button variant='contained' color='primary'onClick={()=> setRecommended(false)}>Todas</Button>
        <Button variant='contained' color='primary' onClick={()=> setRecommended(true)}>Recomendadas</Button>
      </div>
    </div>
  )
}

export default Header