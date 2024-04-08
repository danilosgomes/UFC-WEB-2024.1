import { useState } from "react"
import { useEffect } from "react"

const MyPromise = new Promise (
    (resolve, rejected) => {
        setTimeout(
            () => {
                const num = Math.floor(Math.random() * 10) + 1
                if ( num % 2 === 0) resolve ("Deu bom, meu primo!s " + num)
                else rejected ("Err! Mais sorte na próxima vez.s " + num)
            }, 5000
        )
    }
)

const AsyncAwait = () => {

    const [result, setResult] = useState("")

    async function getPromise () {
        try{
            const res = await MyPromise
            setResult(res)
        }catch(error){
            setResult(error)
        }
    }

    useEffect(
        () => {
            getPromise()
        }, []
    )
    return (
        <div>
            <h1>Async</h1>
            <h1>Resultado: {result}</h1>
        </div>
    )
}

export default AsyncAwait