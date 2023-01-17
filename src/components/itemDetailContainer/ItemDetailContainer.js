import React from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "../itemDetailContainer/ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const {productoId} = useParams()
    const [product, setProduct] = useState()

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${productoId}`)
        .then(res=>res.json())
        .then(product=>setProduct( <ItemDetail key={product.id} id={"product" + product.id} data={product} />))
        
    }, [productoId])



  return (
    <div className='itemDetailContainer'>
   
    {product}
    </div>
  )
}

export default ItemDetailContainer