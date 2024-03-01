const Calculadora = () => {

    let n1 = 10
    let n2 = 5

    //Duas formas de montar uma função
    
    //1
    const somar = (x,y) => {
        return x + y
    }
    const subtrair = (x,y) => {
        return x - y
    }
    //2
    const multiplicar = (x,y) => x * y
    const dividir = (x,y) => x / y

    return (
        <div>
            <h1>Calculadora</h1>
            <h2>Rusultado somar = {somar(n1,n2)} </h2>
            <h2>Rusultado subtrair = {subtrair(n1,n2)} </h2>
            <h2>Rusultado multiplicar = {multiplicar(n1,n2)} </h2>
            <h2>Rusultado dividir = {dividir(n1,n2).toFixed(2)} </h2>
        </div>
    )
}

export default Calculadora