const Cadeira = ({nome, professor, carga}) => {

    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Professor: {professor}</p>
            <p>Carga Horária: R$ {carga}</p>
        </div>
    )
}

export default Cadeira