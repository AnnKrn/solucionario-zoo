var data = [
  { url: "http://lorempixel.com/300/300/sports/", name: "Manu" },
  { url: "http://lorempixel.com/300/300/people/", name: "Meme" },
  { url: "http://lorempixel.com/300/300/city/", name: "Lucile" },
  { url: "http://lorempixel.com/300/300/nature/", name: "Karla" },
  { url: "http://lorempixel.com/300/300/cats/", name: "Silvana" },
  { url: "http://lorempixel.com/300/300/dogs/", name: "Amalia" }
];

document.getElementById("el-select").addEventListener("change", pasarAlgo);

document
  .getElementById("agregar-imagen")
  .addEventListener("click", crearContenedor);

function crearContenedor() {
  for (var i = 0; i < data.length; i++) {
    var imagenNueva = document.createElement("img");
    imagenNueva.src = data[i].url;
    imagenNueva.alt = "imagen";

    var pNuevo = document.createElement("p");
    pNuevo.innerText = data[i].name;

    var divContenedor = document.createElement("div");
    divContenedor.className = "contenedor-imagenes";

    divContenedor.appendChild(imagenNueva);
    divContenedor.appendChild(pNuevo);
    document.body.appendChild(divContenedor);
  }
}

function pasarAlgo(event) {
  var selectedIndex = event.target.selectedIndex;
  var filtroAAplicar = event.target[selectedIndex].dataset.filtro;
  if (filtroAAplicar == "gray") {
    cambiarAGray();
  } else if (filtroAAplicar == "sepia") {
    cambiarASepia();
  } else if (filtroAAplicar == "nada") {
    quitarFiltro();
  }
}

function quitarFiltro() {
  var imagenesACambiar = document.getElementsByTagName("img");
  console.log(imagenesACambiar);
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].style.filter = "none";
  }
}

function cambiarAGray() {
  var imagenesACambiar = document.getElementsByTagName("img");
  console.log(imagenesACambiar);
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].className = "gray";
  }
}

function cambiarASepia() {
  var imagenesACambiar = document.getElementsByTagName("img");
  console.log(imagenesACambiar);
  for (var i = 0; i < imagenesACambiar.length; i++) {
    imagenesACambiar[i].className = "sepia";
  }
}
