import { TextField } from "@mui/material"

const FilterComponent = ({ filterText, onFilter }) => {
    return (
        <>
            <TextField
                id="search"
                type="text"
                placeholder="Rechercher"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
            
        </>
    )
}

export default FilterComponent