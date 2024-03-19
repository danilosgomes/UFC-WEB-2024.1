import "../MeuDados-001/Style/Style.css"

// function Dados2 ({nome, curso, universidade }) {
//     return (
//         <div>
//             <h1>Nome: {nome}</h1>
//             <h1>Curso: {curso}</h1>
//             <h1>Universidade: {universidade}</h1>
//         </div>
//     );
// }

// const Dados2 = ({ nome, curso, universidade }) =>
//         <div>
//             <h1>Nome: {nome}</h1>
//             <h1>Curso: {curso}</h1>
//             <h1>Universidade: {universidade}</h1>
//         </div>

const Dados2 = (props) => {

    const {nome, curso, universidade} = props
    return (
        <div>
        <h1 className="id">Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {universidade}</h1>
        </div>
    );
};

export default Dados2;
