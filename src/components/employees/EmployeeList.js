import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    //const [employeeSpecialties, setSpecialty] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
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
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>

            
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
