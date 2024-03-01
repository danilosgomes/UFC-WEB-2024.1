import Cadeira from "./Cadeira"

const Curso = ({nome}) => {
    
    if (nome === "Sistemas de Informação") {
        return(
                <div>
                    <h2>
                        <p>Curso: {nome}</p>
                    </h2>
                    <h3>
                        <Cadeira
                        nome = "Matemática Discreta"
                        professor = "Samy de Sá"
                        carga = {64}
                        />
                        <Cadeira
                        nome = "Estrutura de Dados"
                        professor = "Atílio Gomes"
                        carga = {64}
                        />
                        <Cadeira
                        nome = "Persistência de Dados"
                        professor = "Regis Pires"
                        carga = {64}
                        />
                    </h3>
                </div>
        )
    }

    else if (nome === "Ciência da Computação") {
        return(
                <div>
                    <h2>
                        <p>Curso: {nome}</p>
                    </h2>
                    <h3>
                        <Cadeira
                        nome = "Matemática Discreta"
                        professor = "Lucas Smyle"
                        carga = {64}
                        />
                        <Cadeira
                        nome = "Estrutura de Dados"
                        professor = "Wladimir Penha"
                        carga = {64}
                        />
                        <Cadeira
                        nome = "Lógica para Computação"
                        professor = "Samy de Sá"
                        carga = {64}
                        />
                    </h3>
                </div>
        )
    }
}

export default Curso