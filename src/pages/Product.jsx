import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
const Product = () => {
  const {all_product} =useContext(ShopContext)
  let {productId}=useParams()
  let product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product