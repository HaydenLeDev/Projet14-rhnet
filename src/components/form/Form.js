import { useState, useRef } from "react"
import "./Form.scss"
import Parcours from "./parcours/Parcours"

const Form = () => {

    const [index, setIndex] = useState(1)
    const isOverMax = index >= 4
    const isLessMin = index <= 1
    const ref = useRef(null);
    
    const [personalInformation, setPersonalInformation] = useState({
        firstName: "",
        lastName: "",
        dateOfBirthday:""
    })

    const [adress, setAdresse] = useState({
        street: "",
        city:"",
        state: "",
        zipCode: ""
    })

    const [workInformation, setWorkInformation] = useState({
        startDate: "",
        departement: "",
    })

    const onChangePersonalInformation = (e) => {    
        console.log(e.target.name)
        console.log(e.target.value)
        setPersonalInformation({
            ...personalInformation,
            [e.target.name] : e.target.value //Quand on passe dans onchange on fusionne l'ancien etat avec la nouveauté
          })
    } 

    const onSubmit = () => {
        console.log(personalInformation)
    }

    const onClickNext = () => {
        if(!isOverMax){
            setIndex(index + 1)
            ref.current.style.transform = `translate(${990 - (660 * index)}px, ${0}px)` 
        }
    }

    const onClickPrec = () => {
        if(!isLessMin){
            setIndex(index - 1)
            ref.current.style.transform = `translate(${-990 + (660 * (5 - index))}px, ${0}px)`
        }
    }


    return (
        <section className="Form">
            <Parcours index={index} />
            <form className="Form_form" ref={ref}>
                <fieldset className="Form_form_section">
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={personalInformation.firstName}
                            onChange={onChangePersonalInformation}
                            required
                        />
                        <label className="inputCustom_label">First Name</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={personalInformation.lastName}
                            onChange={onChangePersonalInformation}
                            required
                        />
                        <label className="inputCustom_label">Last Name</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="date"
                            id="birthday"
                            name="dateOfBirthday"
                            value={personalInformation.dateOfBirthday}
                            onChange={onChangePersonalInformation}
                            required
                        />
                        <label className="inputCustom_label">Date of Birthday</label>
                    </div>
                </fieldset>
                <fieldset className="Form_form_section">
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="street"
                            required
                        />
                        <label className="inputCustom_label">Street</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="city"
                            required
                        />
                        <label className="inputCustom_label">City</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="state"
                            required
                        />
                        <label className="inputCustom_label">State</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="zipCode"
                            required
                        />
                        <label className="inputCustom_label">Zip Code</label>
                    </div>
                </fieldset>
                <fieldset className="Form_form_section">
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="startDate"
                            required
                        />
                        <label className="inputCustom_label">Start Date</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="departement"
                            required
                        />
                        <label className="inputCustom_label">Departement</label>
                    </div>
                </fieldset>
                <fieldset className="Form_form_section">
                    <p>recap</p>
                    <button onClick={onSubmit}>Ajouter</button>
                </fieldset>
            </form>
            <div className="buttons">
                <button className="button_prec" onClick={onClickPrec}>Prec</button>
                <button className="button_next" onClick={onClickNext}>Next</button>
            </div>

        </section>
    )
}

export default Form

