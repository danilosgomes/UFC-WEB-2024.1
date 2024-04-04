import { useContext } from "react"
import { NumPokemon } from "./MyContext"
import Increment from "./increment"
import Decrement from "./decrement"

const Image = () => {
    
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    let {id} = useContext(NumPokemon)

    return(
        <div>
            <h1>#{id}</h1>
            <img src={url + id + ".png"} alt="Pokemon"  width="240px" border= "2px" solid black/>
            <Increment />
            <Decrement />
            
        </div>
    )
}

export default Image