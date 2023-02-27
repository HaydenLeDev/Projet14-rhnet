import './App.scss';
import Header from "./components/header/Header"
import NewEmployee from "./pages/newEmployee/NewEmployee"
import CurrentEmployee from "./pages/currentEmployee/CurrentEmployee"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setEmployeesData } from "./feature/employes.slice"
import { employeeService } from './_services/employee.service';

/**
 * Router from my app
 * @returns the road component
 */
const App = () => {
  //const dispatch = useDispatch()
  //dispatch(setEmployeesData(EMPLOYEE))
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NewEmployee />} />
          <Route path="/currentEmployee" element={<CurrentEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
