import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const CustomerList = () => {
    const [customers, changeCustomer] = useState([])
    //const [employeeSpecialties, setSpecialty] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    changeCustomer(data)
                })
        },
        []
    )

    // useEffect(() => {
    //     const specialties = employees.map(employee => employee.specialty )
    //     setSpecialty(specialties.join(","))
    //     /*
    //         1. Use .map() to get the specialty of each employee
    //         2. Then update a state variable to be a comma-separated string
    //             (e.g. "iPhone, Printers, ...")
    //     */
    // }, [employees])

    return (
        <>
            <button onClick={() => history.push("/customers")}>Customer</button>

            
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>
                    }
                )
            }
        </>
    )
}
