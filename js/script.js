// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list"); // llamo al contenedor
  const arrayFiltrado = array.filter((element) => typeof element === "string"); // filtro los elementos que no sean strings
  const arrayOrdenado = arrayFiltrado.sort((a,b)=>{return a.localeCompare(b)}); // los ordeno alfabeticamente.
  container.innerHTML = ""; // bacio el contenedor
  arrayOrdenado.forEach((element) => {
    const li = document.createElement("li");
      li.appendChild(document.createTextNode(element));
      container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
    showList(strangeArray);
});
