if (screen.width < 380) {
    let contenedor = document.getElementById('section_services');
    var elementos = contenedor.getElementsByClassName('services_text');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].textContent = elementos[i].innerHTML.substring(0, 120) + "    read more...";
    }
}