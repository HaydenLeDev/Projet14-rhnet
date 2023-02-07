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
        dateOfBirthday: ""
    })

    const [adress, setAdresse] = useState({
        street: "",
        city: "",
        state: "",
        zipCode: ""
    })

    const [workInformation, setWorkInformation] = useState({
        startDate: "",
        departement: "",
    })

    const onChangePersonalInformation = (e) => {
        e.target.classList.add('isClicked')
        setPersonalInformation({
            ...personalInformation,
            [e.target.name]: e.target.value //Quand on passe dans onchange on fusionne l'ancien etat avec la nouveauté
        })
    }

    const onChangeAdresse = (e) => {
        e.target.classList.add('isClicked')
        setAdresse({
            ...adress,
            [e.target.name]: e.target.value
        })
    }

    const onChangeWorkInformation = (e) => {
        e.target.classList.add('isClicked')
        setWorkInformation({
            ...workInformation,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(personalInformation)
        console.log(adress)
        console.log(workInformation)
    }

    const onClickNext = () => {
        if (!isOverMax) {
            setIndex(index + 1)
            ref.current.style.transform = `translate(${990 - (660 * index)}px, ${0}px)`
        }
    }

    const onClickPrec = () => {
        if (!isLessMin) {
            setIndex(index - 1)
            ref.current.style.transform = `translate(${-990 + (660 * (5 - index))}px, ${0}px)`
        }
    }

    const displaysValidate = () => {
        if(!isOverMax){
            return(<button onClick={onSubmit}>Validate</button>)
        } 
        return(<button className="button_next" onClick={onClickNext}>Next</button>)
    }


    return (
        <section className="Form">
            <div className="Form_Header">
                <h1>Create Employee</h1>
                <Parcours index={index} />
            </div>
            <form className="Form_form" ref={ref}>
                <fieldset className="Form_form_section">
                    <h2>Personal Information</h2>
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
                    <h2>Adress</h2>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="street"
                            name="street"
                            value={adress.street}
                            onChange={onChangeAdresse}
                            required
                        />
                        <label className="inputCustom_label">Street</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="city"
                            name="city"
                            value={adress.city}
                            onChange={onChangeAdresse}
                            required
                        />
                        <label className="inputCustom_label">City</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="state"
                            name="state"
                            value={adress.state}
                            onChange={onChangeAdresse}
                            required
                        />
                        <label className="inputCustom_label">State</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={adress.zipCode}
                            onChange={onChangeAdresse}
                            required
                        />
                        <label className="inputCustom_label">Zip Code</label>
                    </div>
                </fieldset>
                <fieldset className="Form_form_section">
                    <h2>WorkFlow</h2>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={workInformation.startDate}
                            onChange={onChangeWorkInformation}
                            required
                        />
                        <label className="inputCustom_label">Start Date</label>
                    </div>
                    <div className="inputCustom">
                        <input
                            className="inputCustom_input"
                            type="text"
                            id="departement"
                            name="departement"
                            value={workInformation.departement}
                            onChange={onChangeWorkInformation}
                            required
                        />
                        <label className="inputCustom_label">Departement</label>
                    </div>
                </fieldset>
                <fieldset className="Form_form_section">
                    <h2>Summary</h2>
                    <div>
                    <h3>Personal Information</h3>
                    <p>First Name : {personalInformation.firstName}</p>
                    <p>Last Name : {personalInformation.lastName}</p>
                    <p>Birthday : {personalInformation.dateOfBirthday}</p>
                    </div>
                    <div>
                    <h3>Adress</h3>
                    <p>Street : {adress.street}</p>
                    <p>City : {adress.city}</p>
                    <p>State : {adress.state}</p>
                    <p>Zip code : {adress.zipCode}</p>
                    </div>
                    <div>
                    <h3>WorkFlow</h3>
                    <p>Start Date : {workInformation.startDate}</p>
                    <p>Departement : {workInformation.departement}</p>
                    </div>
                </fieldset>
            </form>
            <div className="buttons">
                <button className="button_prec" onClick={onClickPrec}>Prec</button>
                {displaysValidate}
            </div>

        </section>
    )
}

export default Form

