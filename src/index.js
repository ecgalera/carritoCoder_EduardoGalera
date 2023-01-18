import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBars from './components/navBar/NavBars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ItemListContainers from './components/ItemListContainers';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemList from './components/itemList/ItemList';
// import CategoryItemContainer from './components/CategoryItemContainer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBars/>
     
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/product' element={<ItemListContainers/>}/>
        <Route exact path='/product/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='/categoria/:categoryId' element={<ItemList/>}/>
      </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


