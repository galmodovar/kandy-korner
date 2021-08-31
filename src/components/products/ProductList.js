import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, updateProducts] = useState([])
    //const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
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