import React, { useState } from 'react'
import "./form.css"

const Form2 = ({onAddOrder, order, onUpdateOrderForm}) => {

    const [customerName, setCustomerName] = useState("")
    const [orderDate, setOrderDate] = useState("")
    const [status, setStatus] = useState(false)

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (order == null) {
            onAddOrder(customerName, orderDate, status)
        } else {
            onUpdateOrderForm(order.id, customerName, orderDate, status)
        }
    }


    return (
        <div id="form-div">
            <form class="form" id="form1" onSubmit={onFormSubmit}>
            
            <p class="name">
                <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Customer Name" id="name" onChange={(e) => setCustomerName(e.target.value)} defaultValue = {order == null ? '' : order.customerName}/>
            </p>
            
            <p class="date">
                <input name="date" type="date" class="validate[required,custom[email]] feedback-input" id="date" placeholder="Order Date" onChange={(e) => setOrderDate(new Date(e.target.value))} defaultValue = {order == null ? "" : order.date}/>
            </p>

            <p class="status">
                <select name="status" class="validate[required,custom[email]] feedback-input" id="status" form="carform" onChange={(e) => e.target.value == "true" ? setStatus(true) : setStatus(false)} defaultValue = {order == null ? "false" : order.status ? "true" : "false"}>
                    <option value="false">Fail</option>
                    <option value="true">Success</option>
                </select>
            </p>
            
            <div class="submit">
                <input type="submit" value={order == null ? "Add" : "Update"} id="button-blue"/>
                <div class="ease"></div>
            </div>
            </form>
        </div>
    )
}

export default Form2
