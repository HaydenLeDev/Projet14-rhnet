let setEmployees = (employees) => {
    localStorage.setItem("employees", JSON.stringify(employees))
}

let getEmployees = () => {
    let employees = localStorage.getItem("employees")
    if (employees == null) {
        return [];
    } else {
        return JSON.parse(employees)
    }
}

let addEmployee = (employee) => {
    let employees = getEmployees()
    employees.push(employee)
    setEmployees(employees)
}

export const employeeService = {
    setEmployees, getEmployees, addEmployee
}