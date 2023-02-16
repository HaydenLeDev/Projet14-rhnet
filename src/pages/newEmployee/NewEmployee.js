import Form from "../../components/form/Form"
import ValidateFrom from "../../components/form/validateForm/ValidateForm"

const NewEmployee = () => {
    return(
        <main>
            <Form />
            <ValidateFrom isValidate={false}/>
        </main>
    )
}

export default NewEmployee
