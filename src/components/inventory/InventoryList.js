import { useEffect, useState } from "react"
import { getAllProducts } from "../ApiManager"

export const InventoryList = ({someAttributeList}) => {
    const [searchResults, updateSearchResults] = useState({})
    const [products, updateProducts] = useState([])

    useEffect(
        () => {
            getAllProducts()
                .then((data) => {
                    updateProducts(data)
                })
        },
        []
    )

    useEffect(
        () => {
            
            const product = products.find(product => product.name.startsWith(someAttributeList))   
                         if (product !== undefined) {
                             updateSearchResults(product)
                            }

                            
        },
        [someAttributeList]
    )


    return (
        <>
           <h2>Inventory List</h2>
           {searchResults?.name}
        </>
    )
}

