import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, updateLocations] = useState([])
    //const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    updateLocations(data)
                })
        },
        []
    )

    // useEffect(
    //     () => {
    //         if (customers.length === 1) {
    //             updateMessage("You have 1 customer")
    //         }
    //         else {
    //             updateMessage(`You have ${customers.length} customers`)
    //         }

    //     },
    //     [customers]
    //)

    return (
        <>
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>{locationObject.address}</p>
                    }
                )
            }
        </>
    )
}