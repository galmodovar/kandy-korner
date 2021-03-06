

export const InventorySearch = ({someAttributeSearch}) => {
   


    return (
        <>
           <h2>Inventory Search</h2>
           <form className="searchForm" onSubmit={(event) => (event.preventDefault)}>
            <h2 className="searchForm__title"></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Search our inventory:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of product"
                        onChange={ (event) => {
                                    const search = event.target.value
                                    someAttributeSearch(search)
                        } } />
                </div>
            </fieldset>
          
        </form>
        </>
    )
}

