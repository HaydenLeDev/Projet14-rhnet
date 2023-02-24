import "./Parcours.scss"

/**
 * Generate the html of the course according to the index.
 * @param {*} index 
 * @returns 
 */
const Parcours = ({ index }) => {

    const parcoursGeneration = () => {
        let test = []
        test.push(<li key={1 + "boule"} className="Parcours_boule Parcours_boule_actif">1</li>)
        for (let i = 2; i < 5; i++) {
            if (i <= index) {
                test.push(<span key={i + "ligne"} className="Parcours_ligne Parcours_ligne_actif"></span>)
                test.push(<li key={i + "boule"} className="Parcours_boule Parcours_boule_actif">{i}</li>)

            } else {
                test.push(<span key={i + "ligne"} className="Parcours_ligne"></span>)
                test.push(<li key={i + "boule"} className="Parcours_boule">{i}</li>)
            }
        }
        return (test)
    }


    return (
        <ul className="Parcours">
            {parcoursGeneration()}
        </ul>
    )
}

export default Parcours;
