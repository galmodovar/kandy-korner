import React, { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"

export const LocationList = () => {
    const [locations, updateLocations] = useState([])
    //const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getAllLocations()
                .then((data) => {
                    updateLocations(data)
                })
        },
        []
    )


    return (
        <>
            <h3> Store Locations:</h3>
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>Store #: {locationObject.id} {locationObject.address}</p>
                    }
                )
            }
        </>
    )
}