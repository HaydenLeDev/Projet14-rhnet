//import { useSelector } from "react-redux"
import { employeeService } from "../../_services/employee.service"
import ItemTable from "./ItemTable"
import "./Table.scss"

/**
 * Table component, create a table based on the received employee table.
 * @returns table employee
 */
const Table = () => {
    const employees = employeeService.getEmployees()

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

export default Table