var data = [
  {
    url: "http://dummyimage.com/300/09f/",
    name: "Vale",
    grades: [4, 3, 1],
    active: false
  },
  {
    url: "http://dummyimage.com/300/13f/",
    name: "Meme",
    grades: [10, 8, 9],
    active: false
  },
  {
    url: "http://dummyimage.com/300/39f/",
    name: "Lucile",
    grades: [8, 7, 2],
    active: true
  },
  {
    url: "http://dummyimage.com/300/89f/",
    name: "Karla",
    grades: [5, 8, 7],
    active: true
  },
  {
    url: "http://dummyimage.com/300/19f/",
    name: "Silvana",
    grades: [3, 4, 10],
    active: false
  },
  {
    url: "http://dummyimage.com/300/04f/",
    name: "Amalia",
    grades: [8, 6, 10],
    active: false
  }
];

document.getElementById("el-select").addEventListener("change", pasarAlgo);

function crearContenedor() {
  for (var i = 0; i < data.length; i++) {
    var imagenNueva = document.createElement("img");
    imagenNueva.src = data[i].url;
    imagenNueva.alt = "imagen";

    var pNuevo = document.createElement("p");
    pNuevo.innerText = data[i].name;

    var divContenedor = document.createElement("div");
    divContenedor.className = "contenedor-imagenes";

    var divNota = document.createElement("p");
    var acumuladoDeNota = 0;
    for (var j = 0; j < data[i].grades.length; j++) {
      acumuladoDeNota += data[i].grades[j];
    }
    var nota = acumuladoDeNota / 3;
    divNota.innerText = Math.floor(nota);
    console.log(nota);

    divContenedor.appendChild(imagenNueva);
    divContenedor.appendChild(pNuevo);
    divContenedor.appendChild(divNota);
    document.body.appendChild(divContenedor);
  }
}

function pasarAlgo(event) {
  var selectedIndex = event.target.selectedIndex;
  var filtroAAplicar = event.target[selectedIndex].dataset.filtro;
  if (filtroAAplicar == "gray") {
    var imagenesACambiar = document.getElementsByTagName("img");
    for (var i = 0; i < imagenesACambiar.length; i++) {
      imagenesACambiar[i].className = "gray";
    }
  } else if (filtroAAplicar == "sepia") {
    var imagenesACambiar = document.getElementsByTagName("img");
    for (var i = 0; i < imagenesACambiar.length; i++) {
      imagenesACambiar[i].className = "sepia";
    }
  } else if (filtroAAplicar == "nada") {
    var imagenesACambiar = document.getElementsByTagName("img");
    for (var i = 0; i < imagenesACambiar.length; i++) {
      imagenesACambiar[i].style.filter = "none";
    }
  }
}

var filtarActivas = document.getElementById("filtrarActivas");
filtrarActivas.addEventListener("click", filtrarActivasFunction);

var filtrarInactivas = document.getElementById("filtrarInactivas");
filtrarInactivas.addEventListener("click", filtrarInactivasFunction);

function filtrarActivasFunction() {
  var filtradasActivas = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].active == true) {
      console.log(data[i].active);
      filtradasActivas.push(data[i]);
    }
  }
  console.log(filtradasActivas);

  // todo pintar estudiantes activas
}

function filtrarInactivasFunction() {
  var filtradas = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].active == false) {
      filtradas.push(data[i]);
    }
  }
  console.log(filtradas);
  // todo pintar inactivas
}
