import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const currentUser = localStorage.getItem("kandy_customer")
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/inventory">Search Inventory</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to={`/orders/${currentUser}`}>My Orders</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="" onClick={
                    () => {
                        localStorage.removeItem("kandy_customer")
                    }
                }>Logout</Link>
            </li>
        </ul>
    )
}
