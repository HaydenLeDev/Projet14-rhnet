import { useSelector } from "react-redux"
import ItemTable from "./ItemTable"
import "./Table.scss"

const Table = () => {
    const employees = useSelector((state) => state.employees.employees)

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
                    <button>Recherche</button>
                    <button>Filtre</button>
                    <div>Items display <button>10</button></div>
                    <button>Filtre</button>
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
                    <button className="Table_footer_gestionPage_button Table_footer_gestionPage_button_prec"></button>
                    <p>1</p>
                    <button className="Table_footer_gestionPage_button"></button>
                </div>
            </div>
        </section>
    )
}

export default Table