import React from 'react'
import ItemList from './itemList/ItemList'


const ItemListContainers = (props) => {

  

  return (
    <div>
    <div class="p-3 mb-2 bg-secondary text-white">Sitio de Compras </div>
    <p class="text-white bg-dark">{props.mensaje}</p>
  

    <ItemList/> 

   </div> 
  )
}

export default ItemListContainers