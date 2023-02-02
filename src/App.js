import './App.scss';
import Header from "./components/header/Header"
import NewEmployee from "./pages/newEmployee/NewEmployee"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<NewEmployee />} />
          <Route path="/currentEmployee" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
