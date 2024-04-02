import ComFilho from "./ComFilho"

const ComPai = () => {
    
    function receber(mensagem) {
        alert("Mensagem do filho: " + mensagem)
    }

    return(
        <div>
            <ComFilho mensagem = "Fala filhão" enviar = {receber}/>
        </div>
    )
}

export default ComPai