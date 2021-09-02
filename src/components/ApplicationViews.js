import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/Locations"
import { ProductList } from "./products/ProductList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { CustomerList } from "./customers/CustomerList"
import { OrderList } from "./orders/OrderList"
import { Inventory } from "./inventory/Inventory"




export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/orders/:customerId">
                        <OrderList />
                    </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/inventory">
                <Inventory />
            </Route>
        </>
    )
}