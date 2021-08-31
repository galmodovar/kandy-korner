


export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
        .then(res => res.json())
}

export const getAllPurchases = () => {
    return fetch(`http://localhost:8088/purchases`)
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=location`)
        .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch(`http://localhost:8088/locations`)
        .then(res => res.json())
}



export const getAllProducts = () => {
    return fetch(`http://localhost:8088/products?_expand=productType&_sort=productTypeId`)
        .then(res => res.json())
}