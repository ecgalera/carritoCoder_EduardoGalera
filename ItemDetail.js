import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import ItemCount from "./itemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = (props) => {

    const { title, id, price, category, image } = props.data

  return (

 
    <div>
    
     <Link style={{ fontWeight:"bolder", textDecorationLine:"none"}} className={"link"} to="/product"> Regresar a Productos</Link>

      <Container className='container'>
        <Card style={{ width: '30rem' }} className='altura'>
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
           {/* <Link to={`/product/${id}`}>Ver Detalle del Producto</Link> */}
           <ItemCount stock={10}/>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )





 
  
}

export default ItemDetail

