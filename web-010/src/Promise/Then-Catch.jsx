import { useState } from "react"
import { useEffect } from "react"

const MyPromise = new Promise (
    (resolve, rejected) => {
        setTimeout(
            () => {
                const num = Math.floor(Math.random() * 10) + 1
                if ( num % 2 === 0) resolve ("Deu bom, meu primo! " + num)
                else rejected ("Err! Mais sorte na próxima vez. " + num)
            }, 2000
        )
    }
)

const ThenCatch = () => {

    const [result, setResult] = useState("")

    useEffect(
        () => {
            MyPromise
            .then(value=>setResult(value))
            .catch(error=>setResult(error))
        }, []
    )
    return (
        <div>
            <h1>Uia</h1>
            <h1>Resultado: {result}</h1>
        </div>
    )
}

export default ThenCatch