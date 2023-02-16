import { useState } from "react"
import "./ValidateForm.scss"

const ValidateFrom = ({validate}) => {
    const [isValidate, setIsValidate] = useState(validate)
    const classValidateForm =  isValidate ? "validateForm validateForm_actif" : "validateForm"
    
    const onClick = () => {
        setIsValidate(false)
    }


    return(
        <div className={classValidateForm}>
            <div className="validateForm_v">
                <i className='fas fa-check-circle'></i>
            </div>
            <div className="validateForm_info">
                <p>Employee create !</p>
                <button onClick={onClick} className="validateForm_info_close"><i className="material-icons">close</i></button>
            </div>
        </div>
    )
}

export default ValidateFrom