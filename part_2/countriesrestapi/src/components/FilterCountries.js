const FilterCountries = (props) => {
    return (
        <div>
            <input value={props.newSearch} onChange={props.handleSearchChange} />
        </div>
    )
}

export default FilterCountries