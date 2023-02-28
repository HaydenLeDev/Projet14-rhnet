import { useState } from "react"
import Form from "../../components/form/Form"
import Modal from 'hayden-react-rhnet-library'

/**
 * Add an employee to our database. Also takes care of displaying the modal
 * @returns The add form
 */
const NewEmployee = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <main className="main_newEmployee">
            <Form isOpen={isOpen} setIsOpen={setIsOpen} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} text={"Employee create !"} autoClose={true} isNotification={true} typeNotification="validate"/>
        </main>
    )
}

export default NewEmployee
