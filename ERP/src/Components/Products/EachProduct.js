import React, { useState } from 'react'
import propTypes from 'prop-types'
import './product.css'
import { getByTestId } from '@testing-library/react';


const EachProduct = ({product, onDeleteProduct, onUpdateProduct}) => {
   return (
    <div className="card">
      <img src={product.imageUrl} alt="Denim Jeans" style={{width:"100%"}}/>
      <h1>{product.name}</h1>
      <p class="price">{product.price}</p>
      <p>Quantity : {product.quantity}</p>
      <p><button onClick={() => onUpdateProduct(product)}>Update</button></p>
      <p><button onClick={() => onDeleteProduct(product.id)}>Delete</button></p>
    </div>
  )
}
// EachProduct.propsTypes = {
//   productList: propTypes.array,
// }
// EachProduct.defaultProps = {
//   productList:[],
// };
export default EachProduct

