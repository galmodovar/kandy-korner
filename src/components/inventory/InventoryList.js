import React, { useEffect, useState } from "react"
import { getAllProducts } from "../ApiManager"

export const InventoryList = ({someAttributeList}) => {
    const [searchTerm, updateSearch] = useState({})
    const [products, updateProducts] = useState([])

    useEffect(
        () => {
            getAllProducts()
                .then((data) => {
                    updateProducts(data)
                })
        },
        [searchTerm]
    )

    useEffect(
        () => {
            
            const product = products.find(product => product.name.Startswith(searchTerm))   
                         if (product !== undefined) {
                             return product
                         }
                        updateSearch(product)
        },
        [someAttributeList]
    )


    return (
        <>
           <h2>Inventory List</h2>
           {searchTerm?.name}
        </>
    )
}