
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {
                ({bkgb}) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: bkgb }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB