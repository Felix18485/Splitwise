class Usuario {
    constructor(nombre, pathImg) {
        this.nombre = nombre;
        this.gastos = [];
        this.pathImg = pathImg;
    }

    // Completar con los métodos necesarios
}


class Gasto {
    constructor(titulo, monto, fecha) {
        this.titulo = titulo;
        this.monto = monto;
        this.fecha = fecha;
    }
    // Completar con los métodos necesarios
}

//Accedemos al contenedor que contendra el formulario por su id
let contenedor = document.getElementById("accordion-body");
//Creamos el formulario
let labelUsuario = document.createElement("label");
labelUsuario.textContent = "Usuarios";
let formulario = document.createElement("form");
//Creamos el menu desplegable con las opciones
let usuarios = document.createElement("select");
let opcionVacia = document.createElement("option");
opcionVacia.setAttribute("value", "---");
opcionVacia.text = "---";
let opcionJuan = document.createElement("option");
opcionJuan.setAttribute("value", "Juan");
opcionJuan.textContent = "Juan";
let opcionMaria = document.createElement("option");
opcionMaria.setAttribute("value", "Maria");
opcionMaria.textContent = "Maria";
let opcionAna = document.createElement("option");
opcionAna.setAttribute("value", "Ana");
opcionAna.textContent = "Ana";
//Creamos el input para el  titulo
let labelTitulo = document.createElement("label");
labelTitulo.textContent = "Titulo";
let inputTitulo = document.createElement("input");
inputTitulo.setAttribute("type", "text");
//Creamos el input para el importe
let labelImporte = document.createElement("label");
labelImporte.textContent = "Importe";
let inputImporte = document.createElement("input");
inputImporte.setAttribute("type", "text");
//Creamos el input para la fecha
let labelFecha = document.createElement("label");
labelFecha.textContent = "Fecha";
let inputFecha = document.createElement("input");
inputFecha.setAttribute("type", "text");
//Añadimos todos los campos al formulario
contenedor.append(formulario);
usuarios.append(opcionVacia,opcionJuan,opcionMaria,opcionAna);
formulario.append(labelUsuario,usuarios,labelTitulo,inputTitulo,labelImporte,inputImporte,labelFecha,inputFecha);
