import { useState } from "react"
import { InventoryList } from "./InventoryList"
import { InventorySearch } from "./InventorySearch"

export const Inventory = () => {
    const [searchTerm, updateSearch] = useState("")


   


    return (
        <>
          <InventorySearch someAttributeSearch={updateSearch} />
          <InventoryList someAttributeList={searchTerm} />
        </>
    )
}