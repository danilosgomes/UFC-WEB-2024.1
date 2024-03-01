import Produto from "./Produto"

const Loja = () => {
    return(
        <div>
            <h1>Janas Bar</h1>
            <h3>
                <Produto
                nome = "Prata"
                categoria = "Cachaça"
                preco = {1}
                />
            </h3> <br/>
            <h3>
                <Produto
                nome = "Ouro"
                categoria = "Cachaça"
                preco = {1}
                />
            </h3> <br/>
            <h3>
                <Produto
                nome = "150"
                categoria = "Cachaça"
                preco = {1}
                />
            </h3>
        </div>
    )
}

export default Loja