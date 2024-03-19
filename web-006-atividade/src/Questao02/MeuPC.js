const PlacaMae = ({ nome, preco }) => {
    return(
        <div>
            <h2>Placa Mãe</h2>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
            <br/>
        </div>
    )
}
const Memoria = ({ nome, preco }) => {
    return(
        <div>
            <h2>Memória</h2>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
            <br/>
        </div>
    )
}
const PlacaDeVideo = ({ nome, preco }) => {
    return(
        <div>
            <h2>Placa de Vídeo</h2>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}

export { PlacaMae, Memoria, PlacaDeVideo }


