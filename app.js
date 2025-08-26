export const $ = (sel) => document.querySelector(sel);

const outSaludo = $('#outSaludo');
const outEventos = $('#outEventos');
const outDatos = $('#outDatos');
const outStorage = $('#outStorage');

let clickCount = 0;


$('#btnSaludar').addEventListener('click', () => {
    const nombre = $('#nombre').value.trim();
    const edad = Number($('#edad').value);

    if(!nombre)
    {
        outSaludo.textContent = ' Debe ingresar un nombre \u26A0\uFE0F';
        return;
    }
    if(Number.isNaN(edad) || edad <=0)
    {
        outSaludo.textContent = 'Edad inválida \u26A0\uFE0F';
        return;
    }

    const estado = edad >= 18 ? 'mayor de edad' : 'menor de edad';
    outSaludo.textContent = `Hola, ${nombre}. Tienes ${edad} años y eres ${estado}`;

}
)

$('#btnAgregar').addEventListener(
    'click', () => {
        const texto = $('#txtItem').value.trim();
        if(!texto) return;
        
        const li = document.createElement('li');
        li.textContent = texto;

        const del = document.createElement('button');
        del.textContent = 'Eliminar';
        del.className = 'pill';

        del.dataset.action = 'eliminar';

        del.addEventListener('click',() => { li.remove()});

        li.appendChild(del);
        $('#lista').appendChild(li);

        $('#txtItem').value = '';
        $('#txtItem').focus();
    }
);