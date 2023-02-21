import { useState } from "react"
import Form from "../../components/form/Form"
import ValidateFrom from "../../components/form/validateForm/ValidateForm"
import Modal  from 'hayden-react-rhnet-library'
import 'hayden-react-rhnet-library/dist/index.css'

const NewEmployee = () => {

    const [isValidate, setIsValidate] = useState(false)

    return(
        <main>
            <Form isValidate={isValidate} setIsValidate={setIsValidate}/>
            <Modal isValidate={isValidate} setIsValidate={setIsValidate} autoClose={true}/>
        </main>
    )
}

export default NewEmployee
