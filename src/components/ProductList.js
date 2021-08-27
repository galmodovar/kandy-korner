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

    // useEffect(
    //     () => {
    //         if (customers.length === 1) {
    //             updateMessage("You have 1 customer")
    //         }
    //         else {
    //             updateMessage(`You have ${customers.length} customers`)
    //         }

    //     },
    //     [customers]
    //)

    return (
        <>
            {
                products.map(
                    (productObject) => {
                        return <p key={`product--${productObject.id}`}>{productObject.name} {productObject.productType.name}</p>
                    }
                )
            }
        </>
    )
}