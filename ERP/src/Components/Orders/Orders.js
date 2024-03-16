import React, { useEffect, useState } from 'react'
import EachOrder from './EachOrder'
import Form2 from '../Form/Form2'
import "./orders.css"
import axios from 'axios'



const Orders = ({navbarRefresh}) => {
    
    const date = new Date("2024-03-14")

    const [orders,setOrders]=useState([
        {
            id: 1,
            customerName: "Customer1",
            date: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            status: true
        },
        {
            id: 2,
            customerName: "Customer2",
            date: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            status: false
        },
        {
            id: 3,
            customerName: "Customer3",
            date: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            status: true
        }
    ]);

    const [showForm, setShowForm] = useState(false)
    const [currentOrder, setCurrentOrder] = useState(null)

    useEffect( () => {
	navbarRefresh()} , [] )

    const onClickAddButton = () => {
        setShowForm(!showForm)
    }

    const onAddOrder = (customerName, orderDate, status) => {
        let obj = {
            id: orders.length + 1,
            customerName: customerName,
            date: orderDate.getFullYear() + "-" + orderDate.getMonth() + "-" + orderDate.getDate(),
            status: status
        }
        setOrders([...orders, obj])
    }

    const onDeleteOrder = (id) => {
        let remOrders = orders.filter((order) => order.id != id)
		setOrders(remOrders)
	}

    const onClickUpdateOrder = (order) => {
        setCurrentOrder(order)
        setShowForm(true)
    }

    const onUpdateOrderForm = (id, customerName, orderDate, status) => {
        console.log("id = " + id)
        console.log("customerName = " + customerName)
        console.log("orderDate = " + orderDate)
        console.log("status = " + status)
		if (!customerName || !orderDate) {
			alert("Please enter complete product details")
			return
		}

		console.log("id = " + id)
		let index = orders.findIndex((order) => order.id == id)
		console.log("index = " + index)
		var allOrders = orders
		var order = allOrders[index]
		console.log(order)
		order.customerName = customerName
		order.orderDate = orderDate
		order.status = status
		allOrders[index] = order
		setOrders(allOrders)
		setShowForm(false)
		setCurrentOrder(null)
	}

  return (
    <>
    <div class="container-xl">
    {showForm ? <Form2 onAddOrder={onAddOrder} order={currentOrder} onUpdateOrderForm={onUpdateOrderForm}/> : null}
	<div class="table-responsive">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-3">
						<h2><b>Orders</b></h2>
					</div>
                    <div class="col-sm-3"></div>
                    <div class="col-sm-3"></div>
					<div class="col-sm-3">
                        <button className='button' onClick={onClickAddButton}>Add</button>
                    </div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>Order Id</th>
						<th>Customer name</th>
						<th>Order Date</th>
						<th>Status</th>
                        <th></th>
					</tr>
				</thead>
				<tbody>		
                    {
                        orders.map( (order) => {
                        		return( <EachOrder order={order} onDeleteOrder={onDeleteOrder} onClickUpdateOrder={onClickUpdateOrder}/>)
						}
                        )
                    }
                </tbody>		
				
			</table>
		</div>
	</div>        
</div>



    </>
  )
}

export default Orders
