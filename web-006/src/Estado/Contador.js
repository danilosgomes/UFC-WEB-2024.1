import "../Style/Style.css"
import { useState } from "react"

const Contador = () => {

    //let contador = 0
    let [contador, setContador] = useState(0)
    
    return(
        <div>
            <h2>Contador: {contador}</h2>
            <button className="But" 
                onClick={
                    () => setContador((contador) => contador + 1)
                }
            >
                <h2 className="Butt">+</h2>
            </button>
            <button className="But"
                onClick={
                    () => setContador((contador) => contador - 1)
                }
            >
                <h2 className="Butt">-</h2>
            </button>
        </div>
    )
}

export default Contador