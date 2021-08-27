import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/Locations"
import { ProductList } from "./products/ProductList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"



export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}