
const nombre = document.getElementById ('nombre');
const direccion = document.getElementById ('direccion');
const telefono = document.getElementById ('telefono');
const sinPina = document.getElementById ('sinPina');
const conPina = document.getElementById ('conPina');
const boton = document.getElementById ('boton');

const card = document.getElementById ('card');
const respuestaNombre = document.getElementById ('respuestaNombre');
const respuestaDireccion = document.getElementById ('respuestaDireccion');
const respuestaTelefono = document.getElementById ('respuestaTelefono');
const respuestaPizza = document.getElementById ('respuestaPizza');
const imagenPizza = document.getElementById ('imagenPizza')

const pedido = () => {
    respuestaNombre.innerHTML = nombre.value
    respuestaDireccion.innerHTML = direccion.value
    respuestaTelefono.innerHTML = telefono.value

    if (document.getElementById("conPina").checked) {
        respuestaPizza.innerHTML = "Pizza con piña";
        imagenPizza.src='https://www.pngkit.com/png/full/340-3407350_pizzas-hawaiana-png-pizza-con-gaseosa-png.png';
    } else {
        (document.getElementById("sinPina").checked)
        respuestaPizza.innerHTML = "Pizza sin piña";
        imagenPizza.src='http://clipart-library.com/image_gallery2/Pizza-Free-Download-PNG.png';
    }
}

boton.addEventListener('click', pedido);