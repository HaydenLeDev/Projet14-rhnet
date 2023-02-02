import "./Form.scss"
import Parcours from "./parcours/Parcours"

const Form = () => {
    return (
        <section className="Form">
            <Parcours index={1}/>
        </section>
    )
}

export default Form

/*
<form>
                <div className="inputCustom">
                    <input
                        className="inputCustom_input"
                        type="text"
                        id="firstName"
                        required
                    />
                    <label className="inputCustom_label">First Name</label>
                </div>
            </form>
*/