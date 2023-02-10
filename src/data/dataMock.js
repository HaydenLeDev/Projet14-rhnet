export var EMPLOYEE = [
    {
        id: 0,
        userInfos:{
            firstName: "Tony",
            lastName: "Stark",
            DateBirthday: "03-12-95"
        },
        Adress:{
            Street: "1500 Rue des avengers",
            City: "New York",
            State: "Etats-Unis",
            ZipCode: "1180"
        },
        Departement : "Marketing",
        StartDate:"25-02-23"
    },
    {
        id: 1,
        userInfos:{
            firstName: "Tony",
            lastName: "Stark",
            DateBirthday: "03-12-95"
        },
        Adress:{
            Street: "1500 Rue des avengers",
            City: "New York",
            State: "Etats-Unis",
            ZipCode: "1180"
        },
        Departement : "Marketing",
        StartDate:"25-02-23"
    }
]

export const addEmployee = (employee) => {
    EMPLOYEE.push(employee)
    
}