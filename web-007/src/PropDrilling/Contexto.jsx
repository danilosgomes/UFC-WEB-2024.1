import { VariableA } from "./MyContext.jsx"
import { useContext } from "react"

const CompA = () => {
    return (
        <div>
            <VariableA.Provider value="Texto de A">
                <CompB />
                <CompC />
            </VariableA.Provider>
        </div>
    )
}

const CompB = () => {

    let con = useContext(VariableA) 

    return (
        <div>
            <h2>B{con}</h2>
        </div>
    )
}

const CompC = () => {

    return (
        <div>
            <CompD />
        </div>
    )
}

const CompD = () => {

    let con = useContext(VariableA) 

    return (
        <div>
            <h2>D{con}</h2>
        </div>
    )
}

export { CompA, CompB, CompC, CompD } 