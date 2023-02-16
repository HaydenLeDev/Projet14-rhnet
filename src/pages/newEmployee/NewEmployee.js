import { useState } from "react"
import Form from "../../components/form/Form"
import ValidateFrom from "../../components/form/validateForm/ValidateForm"

const NewEmployee = () => {

    const [isValidate, setIsValidate] = useState(false)

    return(
        <main>
            <Form isValidate={isValidate} setIsValidate={setIsValidate}/>
            <ValidateFrom isValidate={isValidate} setIsValidate={setIsValidate} autoClose={true}/>
        </main>
    )
}

export default NewEmployee
