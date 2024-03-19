const Planeta = ({ nome, tipo, ordem, galaxia }) => {

    return (
        <div>
            <h2>Nome : {nome}</h2>
            <h2>Tipo : {tipo}</h2>
            <h2>Ordem : {ordem}</h2>
            <h2>Galáxia : {galaxia}</h2>
        </div>
    )
}

export default Planeta