import { useState, useEffect } from "react"

const Effect = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")

    useEffect(
        () => {
            if(count % 2 === 0) setValue("Par")
            else setValue("Ímpar")
        }, [count]
    )

    return(
        <div>
            <h2>Contador: {count}</h2>
            <h2>Número: {value+""}</h2>
            <button
                onClick={()=>setCount(count=>count+1)}
            >
                +
            </button>
        </div>
    )
}

export default Effect