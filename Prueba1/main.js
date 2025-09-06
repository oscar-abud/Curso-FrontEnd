window.onload = () => {

    const $ = val => document.querySelector(val)
    
    const textDiio = $('#outDiio')
    const textDate = $('#outDate')
    const textGenre = $('#outGenre')
    const textRace = $('#outRace')
    const textLoca = $('#outLoca')
    const form = $("#form")
    
    form.addEventListener('submit', e => {
        e.preventDefault()

        // Obtenemos los valores de los campos sin espacios en los text
        const diio = Number($('#diio').value.trim())
        const date = $('#date').value
        const genre = $('#genre').value
        const race = $('#race').value.trim()
        const location = $('#location').value.trim()

        // Variable aux
        let state = false

        textDiio.textContent = diio && !Number.isNaN(diio) ? '' : (Number.isNaN(diio) ? 'Ingrese solo números! ⚠️' : 'Ingrese el DIIO! ⚠️')
        textDate.textContent = date ? '' : "Ingrese una fecha! ⚠️"
        textGenre.textContent = genre !== "genre" ? '' : "Ingrese el género ⚠️"
        textRace.textContent = race ? '' : "Ingrese la raza!⚠️"
        textLoca.textContent = location ? '' : "Ingrese una ubicación!⚠️"

        state = diio && date && genre && race && location

        if(!state) return
        
        alert('Vaca registrada con exito!')
        form.reset()

    })
}
