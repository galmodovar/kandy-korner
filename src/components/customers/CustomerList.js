import { useEffect, useState } from "react"
import { getAllCustomers, getAllPurchases } from "../ApiManager"


export const CustomerList = () => {
    const [customers, changeCustomer] = useState([])
    const [purchases, changePurchase] = useState([])
    //const [customerPurchases, setPurchases] = useState([])


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

    // useEffect(() => {
    //     const totalPurchases = customers.map(
    //         (customer) => {
    //         customer.total = purchases.filter(purchase => purchase.customerId === customer.id).length
    //         return customer 
    //     })
    //     setPurchases(totalPurchases)
    // }, [purchases] )

    // useEffect(() => {
    //     const totalPurchase = purchases.filter(purchase => purchase.id !== 0).length
    //     setPurchases(totalPurchase)
    // }, [purchases] )

    return (
        <>

            
            {
                customers.map(
                    (customer) => {
                        customer.total = purchases.filter(purchase =>  purchase.customerId === customer.id).length
                        customers.sort((a, b) => {return b.total - a.total})
                                 {
                                    return <p key={`customer--${customer.id}`}>{customer.name} has purchased {customer.total} items</p>
                                } 
                            }
                        )
                                
                           
                    })

                
            
            
                          
                
          </>

            
    )
}
