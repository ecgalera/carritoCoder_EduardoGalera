
import React from 'react'
import { Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom';




const item = (props) => {

  const { title, id, price, category, image } = props.data
  

  return (
    <div>
      <Container className='container'>
        <Card style={{ width: '17rem' }} className='altura'>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>Id: {id}</Card.Title>
            <Card.Title>Precio: {price}</Card.Title>
            <Card.Title>Categoria: {category}</Card.Title>
            
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           <Link to={`/product/${id}`}>Ver Detalle del Producto</Link>
           
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default item