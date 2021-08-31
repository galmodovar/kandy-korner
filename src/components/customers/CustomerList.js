import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllCustomers, getAllPurchases } from "../ApiManager"


export const CustomerList = () => {
    const [customers, changeCustomer] = useState([])
    const [purchases, changePurchase] = useState([])
    const [customerPurchases, setPurchases] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    changeCustomer(data)
                })
        },
        []
    )

    useEffect(
        () => {
            getAllPurchases()
                .then((data) => {
                    changePurchase(data)
                })
        },
        []
    )

    useEffect(() => {
        const totalPurchases = customers.map(customer => {
            purchases.filter(purchase => purchase.customerId === customer.id).length
            customer.total = totalPurchases
            
            return customer 
        }) 
        setPurchases(totalPurchases)
    }, [purchases] )

    return (
        <>

            
            {
                customers.map(
                    (customer) => {
                                return <p key={`customer--${customer.id}`}>{customer.name} {customerPurchases}</p>
                                
                           
                    })

                
            
            }
                          
                
          </>

            
    )
}
