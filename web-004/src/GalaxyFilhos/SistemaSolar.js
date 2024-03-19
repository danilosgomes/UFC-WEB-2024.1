import React from "react"

const SistemaSolar = ({ children, galaxia }) => {
    return (
        <div>
            <h2>Sistema Solar da Galáxia {galaxia}</h2>
            <hr />

            {/* 
            Passando os Filhos para o pai. Para que assim ele possa utilizar no pai dele
            {
            React.Children
        } */}

            {
                React.Children.map(
                    children,
                    (child) => {
                        return React.cloneElement(child, { galaxia })
                    }
                )
            }

        </div>
    )
}

export default SistemaSolar;
