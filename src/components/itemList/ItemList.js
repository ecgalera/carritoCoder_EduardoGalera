import React from 'react'
import Item from '../item/Item'
import { useState, useEffect } from 'react'
import "./ItemList.css"
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ItemList = (props) => {

  // const {category}=props.data
  
  const [product, setProduct] = useState([])
 
 const {categoryId} = useParams()

  useEffect(() => {

    if(categoryId!= null){

      fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
  .then(res => res.json())
  .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))

    }else{

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))

    }

  }, [])

  
  return (

    <div>
    <div className='button'>
    <h3>Seleccione por Categoría</h3>
    <Link to={'/categoria/jewelery'}>Joyeria</Link><br></br>
    <Link to={'/categoria/electronics'}>Electronica</Link><br></br>
    <Link to={"/categoria/men's clothing"}>Ropa de Hombre</Link><br></br>
    <Link to={"/categoria/women's clothing"}>Ropa de Mujer</Link><br></br>
    </div>

    
    <Container className='itemlist'>
      <div className='row'>
        <div className='producto'>
          <div className="card-group mt-3">
            {product}
          </div>
        </div>
      </div>
    </Container>
    </div>

  )
}

export default ItemList