/**
 * Create an employee table row.
 * @param {*} employee
 * @returns a table row
 */
const ItemTable = ({ employee }) => {
    return (
        <tr className="Table_table_body_line">
            <th className="Table_table_body_line_element">{employee.userInfos.firstName}</th>
            <th className="Table_table_body_line_element">{employee.userInfos.lastName}</th>
            <th className="Table_table_body_line_element">{employee.StartDate}</th>
            <th className="Table_table_body_line_element">{employee.Departement}</th>
            <th className="Table_table_body_line_element">{employee.userInfos.DateBirthday}</th>
            <th className="Table_table_body_line_element">{employee.Adress.Street}</th>
            <th className="Table_table_body_line_element">{employee.Adress.City}</th>
            <th className="Table_table_body_line_element">{employee.Adress.State}</th>
            <th className="Table_table_body_line_element">{employee.Adress.ZipCode}</th>
        </tr>
    )
}

export default ItemTable