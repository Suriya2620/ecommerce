import './App.css'


import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category='men'/>}/>
        <Route path='/womens' element={<ShopCategory category='women'/>}/>
        <Route path='/kids' element={<ShopCategory category='kid'/>}/>
        <Route path='/product' element={<Product/>}>

          <Route path=':productId' element='<Product/>'/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App