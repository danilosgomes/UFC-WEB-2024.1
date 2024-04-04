import "../Style/Style.css"
import { Number } from "./MyContext"
import ComponenteFilho2 from "./ComponenteFilho"
import { useState } from "react"

const ComponenteAvo2 = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
    let [number, setNumber] = useState(10)

    return (
        <div>
            <h2>03 - VAMOS ALTERAR OS POKEMÕINS</h2>
            <div>
                <button className="But" 
                onClick={
                    () => setNumber((number) => number + 1)
                }
                >
                <h2 className="Butt">+</h2>
                </button>
                <button className="But"
                    onClick={
                        () => {
                            if (number - 1 < 1) return
                            setNumber(
                            (number) => number - 1)
                        }
                    }
                >
                <h2 className="Butt">-</h2>
                </button>
            </div>
<br />        
            <h2>Componente avô = {number} </h2>
            <img
                src= {url+number+".png"} 
                alt="Pokemon"
                width="240px"
                border= "2px" solid black
            />
<br />
            <Number.Provider value={number}>
                <ComponenteFilho2 url= {url}/>
            </Number.Provider>
        </div>
    )
}

export default ComponenteAvo2