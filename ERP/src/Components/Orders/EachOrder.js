import React, { useState } from 'react'
import propTypes from 'prop-types'
import { getByTestId } from '@testing-library/react';
import axios from 'axios';
import "./orders.css"


const EachOrder = (props) => {

  const {order} = props;
  const [producttype,setProducttype]=useState([])
  const {onDeleteOrder} = props
  const {onClickUpdateOrder} = props
   return (
            <tr>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.status ? "success" : "fail"}</td>
                <td><button className='button'  onClick={() => onDeleteOrder(order.id)}>Delete</button></td>
                <td><button className='button' onClick={() => onClickUpdateOrder(order)}>Update</button></td>
		    </tr>

  )
   }
// EachOrder.propsTypes = {
//   orderList: propTypes.array,
//   productsList : propTypes.array,
// }
// EachOrder.defaultProps = {
//   orderList:[],
//   productsList:[],
// };
export default EachOrder

