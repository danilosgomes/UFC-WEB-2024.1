import "../Style/Style.css"
import { useState } from "react"
import { NumPokemon } from "./MyContext"
import Image from "./image"

const MainPokemon = () => {

    let [id, setId] = useState(10)

    return(
        <div>
            <NumPokemon.Provider value= { {id:id, setId:setId}}>
                <Image />
            </NumPokemon.Provider>
        </div>
    )
}

export default MainPokemon