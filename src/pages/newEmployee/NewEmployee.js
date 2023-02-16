import { useState } from "react"
import Form from "../../components/form/Form"
import ValidateFrom from "../../components/form/validateForm/ValidateForm"

const NewEmployee = () => {

    const [validate, setValidate] = useState(true)

    return(
        <main>
            <Form />
            <ValidateFrom validate={validate} setValidate={setValidate}/>
        </main>
    )
}

export default NewEmployee
