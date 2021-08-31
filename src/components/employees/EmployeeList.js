import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllEmployees } from "../ApiManager"


export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    //const [employeeSpecialties, setSpecialty] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    const fireEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then((data) => {
                changeEmployee(data)
            })
            }
        )
    }

    return (
        <>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>

            
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} works at our {employee.location.city} location.
                                    <button onClick={() => {fireEmployee(employee.id)}}>Let Go</button></p>
                    }
                )
            }
        </>
    )
}