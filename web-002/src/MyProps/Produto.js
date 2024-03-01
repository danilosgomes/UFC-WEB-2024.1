//== O "Props" é usado para passar dados de um componente pai para um componente filho.

// const Produto = (props) => {

//     return(
//         <div>
//             <p>Nome: {props.nome}</p>
//             <p>Categoria: {props.categoria}</p>
//             <p>Preço: R$ {props.preco}</p>
//         </div>
//     )
// }

//== Aqui passamos o props para uma variável para que assim não seja necessário utilizar a "variavel.props" toda vez ao passar um valor em jsx.

// const Produto = (props) => {

//     cont {nome, categoria, preco} = props

//     return(
//         <div>
//             <p>Nome: {nome}</p>
//             <p>Categoria: {categoria}</p>
//             <p>Preço: R$ {preco}</p>
//         </div>
//     )
// }

//== Aqui vemos que podemos desestruturar o props do pai antes de estruturar o objeto Produto

const Produto = ({nome, categoria, preco}) => {

    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Categoria: {categoria}</p>
            <p>Preço: R$ {preco}</p>
        </div>
    )
}

//comentário na div |
//                  v

        <div>
            {/*
            <p>Nome: {nome}</p>
            <p>Categoria: {categoria}</p>
            <p>Preço: R$ {preco}</p>
            */}
        </div>

export default Produto