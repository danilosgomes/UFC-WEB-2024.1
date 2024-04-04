import { useContext } from "react"
import { NumPokemon } from "./MyContext"

const Increment = () => {

    let {setId} = useContext(NumPokemon)

    return(
        <div>
            <button className="But" 
                onClick={
                    () => setId((numPokemon) => numPokemon + 1)
                }
            >
                <h2 className="Butt">+</h2>
            </button>
        </div>
    )
}

export default Increment