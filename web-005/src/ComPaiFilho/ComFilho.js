const ComFilho = ({mensagem, enviar}) => {
    
    function msgF() {
        let msg = "Fala pai"
        console.log(msg)
    }
    return(
        <div>
            <h2>Mensagem do pai: {mensagem}</h2>
            
            <button 
                onClick={
                    () => msgF()
                }
            >
                Responder
            </button>
        </div>
    )
}

export default ComFilho