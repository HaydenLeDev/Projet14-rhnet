import "./ValidateForm.scss"

const ValidateFrom = ({isValidate , setIsValidate, autoClose}) => {

    const classValidateForm =  isValidate ? "validateForm validateForm_actif" : "validateForm validateForm_nonactif"

    const onClick = () => {
        setIsValidate(false)
    }

    if(isValidate && autoClose){
        setTimeout(() => {
            setIsValidate(false);
          }, 5000);
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