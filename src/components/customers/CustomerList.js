import { useEffect, useState } from "react"
import { getAllCustomers, getAllPurchases } from "../ApiManager"


export const CustomerList = () => {
    const [customers, changeCustomer] = useState([])
    const [purchases, changePurchase] = useState([])
    const [customerPurchases, setPurchases] = useState([])


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
        const totalPurchases = customers.map(
            (customer) => {
            customer.total = purchases.filter(purchase => purchase.customerId === customer.id).length
            return customer 
        })
        setPurchases(totalPurchases)
    }, [purchases] )

    return (
        <>

            
            {
                customerPurchases.map(
                    (customer) => {
                                return <p key={`customer--${customer.id}`}>{customer.name} {customer.total}</p>
                                
                           
                    })

                
            
            }
                          
                
          </>

            
    )
}



