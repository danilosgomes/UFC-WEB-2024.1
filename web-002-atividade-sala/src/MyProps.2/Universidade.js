import Curso from "./Curso"

const Universidade = () => {
    return(
        <div>
            <h1>UNIVERSIDADE FEDERAL DO CEARÁ</h1>
            <Curso
            nome = "Sistemas de Informação"
            /> <br/>
            <Curso
            nome = "Ciência da Computação"
            />
        </div>
    )
}

export default Universidade