import React, {useEffect, useState } from "react"

export const Inventory = () => {
    const [searchTerm, updateSearch] = useState("")


   


    return (
        <>
          <InventorySearch someAttributeSearch={updateSearch} />
          <InventoryList someAttributeList={searchTerm} />
        </>
    )
}