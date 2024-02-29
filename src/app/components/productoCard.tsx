import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Producto } from '../context/tiendaProvider';
import styled from 'styled-components';
import {numeroAMoneda} from '../helpers/index';
const Span = styled.span`
  font-weight: bold;
  color: #654190;
`

export type Props={
    producto:Producto;
}

const ProductCard:React.FC<Props>=({producto})=> {
    const {nombre,categoria,caducidad,descripcion,precio,imagen} = producto
    
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imagen}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {nombre}
              </Typography>
              <Typography variant="body2" color="black" className=''>
                <Span>Precio:</Span> {numeroAMoneda(precio)} <br />
                <Span>Categoria:</Span> {categoria} <br />
                <Span>Descripcion:</Span> {descripcion} <br />
                <Span>Caducidad:</Span> {caducidad} <br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default ProductCard