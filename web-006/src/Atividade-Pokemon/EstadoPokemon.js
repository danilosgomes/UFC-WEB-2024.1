import "../Style/Style.css"
import { useState } from "react"

const EstadoPokemon = () => {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    let [numPokemon, setNumPokemon] = useState(1)
    
    return (
        <div>
<br />
            <img
                src= {url+numPokemon+".png"} 
                alt="Pokemon"
                width="240px"
                border= "2px" solid black
            />
<br />
            <h1>Pokemon número {numPokemon}</h1>
            <button className="But" 
                onClick={
                    () => setNumPokemon((numPokemon) => numPokemon + 1)
                }
            >
                <h2 className="Butt">+</h2>
            </button>
            <button className="But"
                onClick={
                    () => {
                        if (numPokemon - 1 < 1) return
                        setNumPokemon(
                        (numPokemon) => numPokemon - 1)
                    }
                }
            >
                <h2 className="Butt">-</h2>
            </button>
        </div>
    )
}

export default EstadoPokemon