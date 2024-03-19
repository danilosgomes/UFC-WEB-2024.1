import SistemaSolar from "./SistemaSolar"
import Planeta from "./Planeta"

const Galaxia = ({ nome }) => {
    return (
        <div>
            <h1>Galáxia {nome}</h1>
            <SistemaSolar galaxia={nome}>
                <Planeta nome="Mercurio" tipo="Rochoso" ordem={1} />
                <hr />
                <Planeta nome="Vênus" tipo="Rochoso" ordem={2} />
                <hr />
                <Planeta nome="Terra" tipo="Rochoso" ordem={3} />
                <hr />
            </SistemaSolar>
        </div>
    )
}

export default Galaxia