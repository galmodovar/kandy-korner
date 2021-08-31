import React, { useEffect, useState } from "react"
import { getAllProducts } from "../ApiManager"

export const ProductList = () => {
    const [products, updateProducts] = useState([])
    //const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getAllProducts()
                .then((data) => {
                    updateProducts(data)
                })
        },
        []
    )

    const purchase = (id) => {
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productId: id,
        
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }
        return fetch(`http://localhost:8088/purchases`, fetchOption)
       
    }

    return (
        <>
            {
                products.map(
                    (productObject) => {
                        return <p key={`product--${productObject.id}`} value={productObject.id}>
                            {productObject.name} {productObject.productType.name}
                            <button onClick={() => {purchase(productObject.id)}}>Purchase</button>

                                </p>
                    }
                )
            }
        </>
    )
}