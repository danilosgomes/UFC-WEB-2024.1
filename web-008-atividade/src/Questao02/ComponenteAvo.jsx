import Number from "./MyContext"
import ComponenteFilho from "./ComponenteFilho"
import { useContext } from "react"

const ComponenteAvo = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    let number = useContext(Number)

    return (
        <div>
            <h2>02 - OLHA OS POKEMÕINS</h2>       
            <h2>Componente avô = {number} </h2>
            <img
                src= {url+number+".png"} 
                alt="Pokemon"
                width="240px"
                border= "2px" solid black
            />
<br />
            <Number.Provider value={number}>
                <ComponenteFilho url= {url}/>
            </Number.Provider>
        </div>
    )
}

export default ComponenteAvo