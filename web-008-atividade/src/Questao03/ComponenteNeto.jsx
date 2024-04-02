import { useContext } from "react"
import Number from "./MyContext"

const ComponenteNeto2 = ({url}) => {

    let number = useContext(Number)
    return (
        <div>
            <h2>Componente neto = {number + 2}</h2>
            <img
                src= {url+number+2+".png"} 
                alt="Pokemon"
                width="240px"
                border= "2px" solid black
            />
        </div>
    )
}

export default ComponenteNeto2