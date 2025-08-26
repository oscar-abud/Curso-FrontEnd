export const $ = (sel) => document.querySelector(sel);

const outSaludo = $('#outSaludo');
const outEventos = $('#outEventos');
const outDatos = $('#outDatos');
const outStorage = $('#outStorage');

let clickCount = 0;


$('#btnSaludar').addEventListener('click', () => {
    const nombre = $('#nombre').value.trim();
    const edad = Number($('#edad').value);

    if (!nombre) {
        outSaludo.textContent = ' Debe ingresar un nombre \u26A0\uFE0F';
        return;
    }
    if (Number.isNaN(edad) || edad <= 0) {
        outSaludo.textContent = 'Edad inválida \u26A0\uFE0F';
        return;
    }

    const estado = edad >= 18 ? 'mayor de edad' : 'menor de edad';
    outSaludo.textContent = `Hola, ${nombre}. Tienes ${edad} años y eres ${estado}`;

}
)

$('#btnAgregar').addEventListener(
    'click', () => {
        const texto = $('#txtItem').value.trim(); // Camputramos el campo el campo del input
        if (!texto) return; // Si el campo está vacío, no hacemos nada

        const li = document.createElement('li'); // Creamos un elemento li
        li.textContent = texto; // Le asignamos el texto del input

        const del = document.createElement('button'); // Creamos un botón para eliminar el elemento
        del.textContent = 'Eliminar'; // Le asignamos el texto "Eliminar"
        del.className = 'pill'; // Le asignamos la clase "pill"

        del.dataset.action = 'eliminar'; // Le asignamos un atributo data-action con el valor "eliminar"

        del.addEventListener('click', () => { li.remove() });

        li.appendChild(del);
        $('#lista').appendChild(li);

        $('#txtItem').value = '';
        $('#txtItem').focus();
    }
);