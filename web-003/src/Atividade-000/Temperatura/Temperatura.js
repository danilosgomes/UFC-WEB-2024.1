const Temperatura = () => {
    let c = 56,
        f = 0,
        k = 301

    function CpF(c) { f = c * 1.8 + 32 }
    function FpC(f) { c = (f - 32) * 1.8 }
    function kelvin(k) {
        c = k - 273
        f = (k - 273) * 1.8 + 32

        return { c, f }
    }

    return (
        <div>
            <h1>celsius para fahrenheit:{CpF(c)}</h1>
            <h1>fahrenheit para celsius:{FpC(f)}</h1>
            <h1>kelvin para celsius e fahrenheit:{JSON.stringify(kelvin(k))}</h1>
        </div>
    )
}

export default Temperatura
