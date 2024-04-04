import { useContext } from "react"
import { Number } from "./MyContext"
import ComponenteNeto2 from "./ComponenteNeto"

const ComponenteFilho2 = ({url}) => {

    let number = useContext(Number)

    return (
        <div>
            <h2>Componente filho = {number + 1} </h2>
            <img
                src= {url+number+1+".png"} 
                alt="Pokemon"
                width="240px"
                border= "2px" solid black
            />
<br />
            <ComponenteNeto2 url={url}/>
        </div>
    )
}

export default ComponenteFilho2