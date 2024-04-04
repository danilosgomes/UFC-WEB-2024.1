import React, { useContext } from "react"
import  { Number } from "./MyContext"
import  { Button } from "./MyContext"
const ComponenteNeto2 = ({ url }) => {

    let number = useContext(Number)
    let test = useContext(Button)
    return (
        <div>
            <h2>Componente neto = {number + 2}</h2>
            <img
                src= {url+number+2+".png"} 
                alt="Pokemon"
                width="240px"
                border= "2px" solid black
            />
            <p>{test}</p>
        </div>
    )
}

export default ComponenteNeto2