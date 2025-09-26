import { useState } from "react"

function contactForm() {
    const [cambiar, setCambiar] = useState(false)

    const submit = () => {
        setCambiar(!cambiar)
    }

    return(
        <>
            <h1>Ingresa valor</h1>
            <button onClick={submit}>Ingresa el valor</button>
            <p>{ cambiar ? "cambiame" : "cambiado" }</p>
        </>
    )
}

export default contactForm