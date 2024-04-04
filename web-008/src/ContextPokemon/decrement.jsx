import { useContext } from "react"
import { NumPokemon } from "./MyContext"

const Decrement = () => {

    let {id} = useContext(NumPokemon)
    let {setId} = useContext(NumPokemon)

    return(
        <div>
             <button className="But"
                onClick={
                    () => {
                        if (id - 1 < 1) return
                            setId(
                            (numPokemon) => numPokemon - 1)
                    }
                }
            >
                <h2 className="Butt">-</h2>
            </button>
        </div>
    )
}

export default Decrement