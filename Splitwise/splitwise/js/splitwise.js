class Usuario {
    constructor(nombre, pathImg) {
        this.nombre = nombre;
        this.gastos = [];
        this.pathImg = pathImg;
    }

    // Completar con los métodos necesarios

    //Metodo para añadir el gasto al usuario
    añadirGasto() {
        let importe = document.getElementById("inputImporte");
        let fecha = document.getElementById("inputFecha");
        let titulo = document.getElementById("inputTitulo");
        let gasto = new Gasto(titulo.value, importe.value, fecha.value);
        this.gastos.push(gasto);
    }

    mostrarResumen() {
        let divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class", "card mb-12 espacio");
        let divSecundario = document.createElement("div");
        divSecundario.setAttribute("class", "row g-0");
        let divImagen = document.createElement("div");
        divImagen.setAttribute("class", "col-md-2");
        let imagen = document.createElement("img");
        imagen.setAttribute("src", this.pathImg);
        imagen.setAttribute("class", "img-fluid rounded-start");
        let divCarta = document.createElement("div");
        divCarta.setAttribute("class", "col-md-10");
        let divCartaCuerpo = document.createElement("div");
        divCartaCuerpo.setAttribute("class", "card-body");
        let tituloCarta = document.createElement("h5");
        tituloCarta.setAttribute("class", "card-title");
        tituloCarta.textContent = this.nombre;
        let parrafo = document.createElement("p");
        parrafo.setAttribute("class", "card-text");
        let inputImporte = document.getElementById("inputImporte");
        let inputFecha = document.getElementById("inputFecha");
        parrafo.textContent = "Pagó " + inputImporte.value + " el " + inputFecha.value;
        divImagen.append(imagen);
        divCartaCuerpo.append(tituloCarta, parrafo);
        divCarta.append(divCartaCuerpo);
        divSecundario.append(divImagen, divCarta);
        divPrincipal.append(divSecundario);
        let contenedor = document.getElementById("accordion");
        contenedor.append(divPrincipal);
    }
}


let juan = document.getElementById("Juan");
let ana = document.getElementById("Ana");
let sara = document.getElementById("Sara");
let usuarios = [];
let usuarioJuan = new Usuario(juan.value, "./img/usuarios/avatar_a.png");
let usuarioAna = new Usuario(ana.value, "./img/usuarios/avatar_b.png");
let usuarioSara = new Usuario(sara.value, "./img/usuarios/avatar_c.png");
usuarios.push(usuarioJuan, usuarioAna, usuarioSara);

class Gasto {
    constructor(titulo, monto, fecha) {
        this.titulo = titulo;
        this.monto = monto;
        this.fecha = fecha;
    }
    // Completar con los métodos necesarios
}

let btnEnviar = document.getElementById("btnEnviar");
//Añadimos el evento al boton de enviar para que compruebe si los campos son correctos con expresiones regulares
btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    let inputTitulo = document.getElementById("inputTitulo");
    let inputImporte = document.getElementById("inputImporte");
    let inputFecha = document.getElementById("inputFecha");
    let regexTitulo = /^[a-zA-Z0-9\s]{1,20}$/;
    let regexImporte = /^(?:1000\.00|[0-9]{1,3}\.[0-9]{2})$/;
    let regexFecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let valido = true;
    if (!inputFecha.value == "" || !inputImporte.value == "" || !inputTitulo.value == "") {
        if (regexTitulo.test(inputTitulo.value)) {
            inputTitulo.style.borderColor = "green";
        } else {
            inputTitulo.style.borderColor = "red";
            valido = false;
        }

        if (regexImporte.test(inputImporte.value)) {
            inputImporte.style.borderColor = "green";
        } else {
            inputImporte.style.borderColor = "red";
            valido = false;
        }

        if (regexFecha.test(inputFecha.value)) {
            inputFecha.style.borderColor = "green";
        } else {
            inputFecha.style.borderColor = "red";
            valido = false;
        }
        //Si todos los campos estan bien mostraremos el resumen y añadiremos el gasto al usuario
        if (valido == true) {
            let select = document.getElementById("selectUsuarios");
            //Buscamos la posicion en el array del usuario que tiene el nombre igual al valor seleccionado en el select
            let posicion = usuarios.findIndex(usuario => usuario.nombre === select.value);
            usuarios[posicion].añadirGasto();
            usuarios[posicion].mostrarResumen();
            //Limpiamos los campos y volvemos a poner los bordes en negro
            select.value = "---";
            inputFecha.value = "";
            inputFecha.style.borderColor = "black";
            inputImporte.value = "";
            inputImporte.style.borderColor = "black";
            inputTitulo.value = "";
            inputTitulo.style.borderColor = "black";
        }
    } else {
        alert("Todos los campos son obligatorios");
    }
})
