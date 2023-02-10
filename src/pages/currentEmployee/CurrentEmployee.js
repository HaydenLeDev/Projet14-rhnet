import { useDispatch } from "react-redux"
import { setEmployeesData } from "../../feature/employes.slice"
import { EMPLOYEE } from "../../data/dataMock"
import Table from "../../components/table/Table"
const CurrentEmployee = () => {

    const dispatch = useDispatch()
    dispatch(setEmployeesData(EMPLOYEE))
    return(
        <main>
            <Table />
        </main>
    )
}

export default CurrentEmployee
