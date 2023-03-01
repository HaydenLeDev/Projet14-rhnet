import { TextField } from "@mui/material"
/**
 *  Input for array filter
 * @returns FilterComponent
 */
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