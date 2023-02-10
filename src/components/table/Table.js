import { useSelector } from "react-redux"
import ItemTable from "./ItemTable"

const Table = () => {
    const employees = useSelector((state) => state.employees.employees)

    const generateTable = () => {
        const listItem = employees.map((employee) =>
            <ItemTable key={employee.id.toString()} employee={employee} />
        )
        return listItem
    }

    return (
        <section>
        <div>
            <h1>Current Employee</h1>
            <button>Recherche</button>
            <button>Filtre</button>
            <div>Items display <button>10</button></div>
            <button>Filtre</button>
        </div>
            <table>
                <thead>
                    <tr>
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
                <tbody>
                    {generateTable()}
                </tbody>
            </table>
            <div>
            <div>Showing {employees.length} of {employees.length} items</div>
            <div>
                <span></span>
                1
                <span></span>
            </div>
            </div>
        </section>
    )
}

export default Table