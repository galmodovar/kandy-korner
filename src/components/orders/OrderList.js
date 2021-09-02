import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const OrderList = () => {
    const [purchases, getPurchases] = useState([])
    const [total, updatePurchases] = useState("")
    const [totalPurchases, setPurchases] = useState(new Map())
    const { customerId }  = useParams()
    
    useEffect( () => {
        fetch(`http://localhost:8088/purchases?customerId=${customerId}&_expand=product&_expand=customer`)
            .then(res => res.json())
            .then((data) => {
                getPurchases(data)
            })
    }, [ customerId ])

    useEffect(() => {
        const totalPurchases = purchases.filter(purchase => purchase.id !== 0).length
        updatePurchases(totalPurchases)
    }, [purchases] )


    const createLineItem = () => {
        const customerPurchases = new Map()
        for (const purchase of purchases) {
            if (customerPurchases.has(purchase.productId)) {
                    customerPurchases.get(purchase.productId).total++
                    customerPurchases.get(purchase.productId).price += customerPurchases.get(purchase.productId).total
                    
            } else {
                    customerPurchases.set(purchase.productId, {total: 1, price: purchase.product.price, name: purchase.product.name})
            }
        }
        return customerPurchases
    }

    useEffect(() => {
        const purchaseList = createLineItem()
        setPurchases(purchaseList)
    }, [purchases] )







    return (
        <>
            <h2>Shopping Cart</h2>

            {
                Array.from(totalPurchases).map(
                    
                    ([key, value]) => {
                        return <p key={`purchase--${key}`}>{value.name} {value.price} {value.total} </p>
                    }
                )
            }

            <h3>You have {total} items in your cart.</h3>

            
        </>
    )
}