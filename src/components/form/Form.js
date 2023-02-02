import "./Form.scss"

const Form = () => {
    return (
        <section className="Form">
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
        </section>
    )
}

export default Form
