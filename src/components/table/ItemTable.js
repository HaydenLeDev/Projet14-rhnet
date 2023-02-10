const ItemTable = ({employee}) => {
    return (
        <tr>
            <th>{employee.userInfos.firstName}</th>
            <th>{employee.userInfos.lastName}</th>
            <th>{employee.StartDate}</th>
            <th>{employee.Departement}</th>
            <th>{employee.userInfos.DateBirthday}</th>
            <th>{employee.Adress.Street}</th>
            <th>{employee.Adress.City}</th>
            <th>{employee.Adress.State}</th>
            <th>{employee.Adress.ZipCode}</th>
        </tr>
    )
}

export default ItemTable