//import { useSelector } from "react-redux"
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
        ){
            return true
        } else {
            return false
        }
    }


    let filteredItems = employees

    if (filterText === ''){
        filteredItems = employees
        console.log(filterText)
        console.log(filteredItems)
    } else {
        filteredItems = employees.filter(
            item => filtre(item, filterText),
        );
        console.log(filterText)
        console.log(filteredItems)
    }

    return (
        <div className="Table">
            <div className="Table_header">
                <h1 className="Table_header_title">Current Employees</h1>
                <FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText}/>
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
            />
        </div>
    )
}

/*
const generateTable = () => {
    const listItem = employees.map((employee) =>
        <ItemTable key={employee.id.toString()} employee={employee} />
    )
    return listItem
}
 
return (
    <section className="Table">
        <div className="Table_header">
            <h1 className="Table_header_titre">Current Employee</h1>
            <div className="Table_header_filtres">
                <div className="Table_header_filtres_research">
                    <i className="Table_header_filtres_research_icone fas fa-search"></i>
                    <input className="Table_header_filtres_research_input" type="text" placeholder="Recherche"></input>
                </div>
                <div className="Table_header_filtres_filtre">
                    <div className="Table_header_filtres_filtre_line"></div>
                    <div className="Table_header_filtres_filtre_line"></div>
                    <div className="Table_header_filtres_filtre_line"></div>
                </div>
                <div className="Table_header_filtres_number">Items display
                    <select className="Table_header_filtres_number_select" type="number">
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </div>
        <table className="Table_table">
            <thead className="Table_table_thead">
                <tr className="Table_table_thead_line">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Departement</th>
                    <th>Birthday</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
            <tbody className="Table_table_body">
                {generateTable()}
            </tbody>
        </table>
        <div className="Table_footer">
            <div>Showing {employees.length} of {employees.length} items</div>
            <div className="Table_footer_gestionPage">
                <button className="Table_footer_gestionPage_button Table_footer_gestionPage_button_prec fas fa-angle-left"></button>
                <p>1</p>
                <button className="Table_footer_gestionPage_button fas fa-angle-right"></button>
            </div>
        </div>
    </section>
)
}
*/

export default Table