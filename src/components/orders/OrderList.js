import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const OrderList = () => {
    const [purchases, getPurchases] = useState([])
    const [total, updatePurchases] = useState("")
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

    return (
        <>
            <h2>Shopping Cart</h2>

            {
                purchases.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>{purchase.product.name} {purchase.product.price}</p>
                    }
                )
            }

<div>You have {total} items in your cart.</div>

            
        </>
    )
}