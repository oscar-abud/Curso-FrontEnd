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

        textDiio.textContent = '';
        textDate.textContent = '';
        textGenre.textContent = '';
        textRace.textContent = '';
        textLoca.textContent = '';
        // Variable aux
        let state = false
        // Variable para verificar el genero
        const validGenre = ['m', 'h']

        textDiio.textContent = diio && !Number.isNaN(diio) ? '' : (Number.isNaN(diio) ? 'Ingrese solo números! ⚠️' : 'Ingrese el DIIO! ⚠️')

        if(!date) textDate.textContent = "Ingrese una fecha! ⚠️"
        if(!validGenre.includes(genre)) textGenre.textContent = "Ingrese el género ⚠️"
        if(!race) textRace.textContent = "Ingrese la raza!⚠️"
        if(!location) textLoca.textContent = "Ingrese una ubicación!⚠️"

        state = diio && date && validGenre.includes(genre) && race && location

        if(!state) return
        
        alert('Vaca registrada con exito!')
        form.reset()

    })
}
