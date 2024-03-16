import React, { useState } from 'react'
import "./form.css"

const Form = ({onAddProduct, product, onUpdateProductForm}) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (product == null) {
            onAddProduct(name, price, quantity)
        } else {
            onUpdateProductForm(product.id, name, price, quantity)
        }
    }


    return (
        <div id="form-div">
            <form class="form" id="form1" onSubmit={onFormSubmit}>
            
            <p class="name">
                <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" onChange={(e) => setName(e.target.value)} defaultValue = {product == null ? '' : product.name}/>
            </p>
            
            <p class="price">
                <input name="price" type="number" class="validate[required,custom[email]] feedback-input" id="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} defaultValue = {product == null ? '' : product.price}/>
            </p>

            <p class="quantity">
                <input name="quantity" type="number" class="validate[required,custom[email]] feedback-input" id="quantity" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} defaultValue = {product == null ? '' : product.quantity}/>
            </p>
            
            <div class="submit">
                <input type="submit" value={product == null ? "Add" : "Update"} id="button-blue"/>
                <div class="ease"></div>
            </div>
            </form>
        </div>
    )
}

export default Form
