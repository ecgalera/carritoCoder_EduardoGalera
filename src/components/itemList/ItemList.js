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

      fetch(`https://fakestoreapi.com/category/${categoryId}`)
  .then(res => res.json())
  .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))

    }else{

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))

    }

  }, [])

  
  return (

    <div className='button'>

    <Link to={`/categoria/${categoryId}`}>Categoria</Link>

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