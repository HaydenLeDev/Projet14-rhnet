import DataTable from "react-data-table-component"
import { employeeService } from "../../_services/employee.service"
import "./Table.scss"
import { useState } from "react"
import FilterComponent from './FilterComponent'
/**
 * Table component, create a table based on the received employee table.
 * @returns table employee
 */
const Table = () => {

    const employees = employeeService.getEmployees()
    /**
     * Setting up table columns
     */
    const columns = [
        {
            name: "FirstName",
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: "LastName",
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: "StartDate",
            selector: row => row.StartDate,
            sortable: true,
        },
        {
            name: "Departement",
            selector: row => row.Departement,
            sortable: true,
        },
        {
            name: "Birthday",
            selector: row => row.DateBirthday,
            sortable: true,
        },
        {
            name: "Street",
            selector: row => row.Street,
            sortable: true,
        },
        {
            name: "City",
            selector: row => row.City,
            sortable: true,
        },
        {
            name: "State",
            selector: row => row.State,
            sortable: true,
        },
        {
            name: "ZipCode",
            selector: row => row.ZipCode,
            sortable: true,
        },
    ]

    const [filterText, setFilterText] = useState('');

    /**
     * Filter the table according to the word written in the search bar.
     * @param {*} item 
     * @param {*} filterText 
     * @returns 
     */
    const filtre = (item, filterText) => {
        if (item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.DateBirthday.toLowerCase().includes(filterText.toLowerCase()) ||
            item.Street.toLowerCase().includes(filterText.toLowerCase()) ||
            item.City.toLowerCase().includes(filterText.toLowerCase()) ||
            item.State.toLowerCase().includes(filterText.toLowerCase()) ||
            item.ZipCode.toLowerCase().includes(filterText.toLowerCase()) ||
            item.Departement.toLowerCase().includes(filterText.toLowerCase()) ||
            item.StartDate.toLowerCase().includes(filterText.toLowerCase())
        ) {
            return true
        } else {
            return false
        }
    }

    let filteredItems = employees
    if (filterText === '') {
        filteredItems = employees
    } else {
        filteredItems = employees.filter(
            item => filtre(item, filterText),
        );
    }

    return (
        <div className="Table">
            <div className="Table_header">
                <h1 className="Table_header_title">Current Employees</h1>
                <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
            />
        </div>
    )
}

export default Table