import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {

    const {bkgd} = useContext(ColorTheme)

    return (
        <div>
            <h1 style={{ backgroundColor: bkgd }}>
                Contexto D
            </h1>
        </div>
    )
}

export default FunctionContextD