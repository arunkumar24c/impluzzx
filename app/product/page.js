import React from 'react'
import Banner from './component/Banner'
import Product from './component/Product'
import Products from './component/Products'

const page = () => {
  return (
    <div>
      <Banner/>
      <Products/>
      <Product/>
    </div>
  )
}

export default page