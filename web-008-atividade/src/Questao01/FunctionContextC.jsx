import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgc}) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgc }}>
                                Contexto C
                            </h1>
                            <FunctionContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextC