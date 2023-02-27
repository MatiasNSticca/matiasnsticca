// let nombre = ("Matias");
// console.log("Mi nombre es " + nombre); 

// const miApellido = "Sticca";
// console.log("Mi apellido es " + miApellido);

// let resultado = 4 + 4;
// console.log("El resultado es " + resultado);

// var op1 = 2;
// var op2 = 3;
// var resultados = op1 * op2;
// console.log("El valor de es: " + resultados);


// let miNombre = "Nicolas";

// if (miNombre == "Pablo") {
//     console.log("Si, es correcto");
// } else {
//     console.log("No, no sos Nicolas")
// }


// let miNumero = 0;
// if (miNumero > 0) {
//     console.log("Mi numero es positivo");
// } else if (miNumero === 0) {
//     console.log("Mi numero es zero");
// } else {
//     console.log("Mi numero es negativo");
// }


// let contador = 7;
// while (contador < 5) {
//   console.log(contador);

//     contador = contador + 1;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// function saludar(nombre, edad) {
//     console.log("Mi nombre es " + nombre);
//     console.log("Mi edad es " + edad);
// }

// saludar("Matias", 25)

// function multiplicar(num1, num2){
//     let resultado = num1 * num2;
//     return resultado
// }

// let recibidor = multiplicar(2, 5);
// console.log("El resultado es " + recibidor)

// let miArreglo = ["Matias", "Nicolas", "Lucas", "Agustin"];

// for (let i = 0; i < 4; i++) {
//     console.log("Accediendo a mis nombres " + i)
//     let mostrar = miArreglo [i];
//     console.log(mostrar);
// }

// let objetoPersona = {
//     nombre : "Matias",
//     edad : 25,
//     masculino : true,
// };

// objetoPersona.comidaPreferida = "Hamburguesa";

// console.log(objetoPersona);

// let objetoPersona2 = {
//     nombre : "Nicolas",
//     edad : 21,
//     masculino : false,
// }

// console.log(objetoPersona2);


// document.getElementById("boton").onclick = function () {
//     console.log("Capturamos el evento click");
//     document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS";
// }

// document.addEventListener("click", function () {
//     console.log("Hola mundo desde la concha de la lora");
//     document.getElementById("demo").innerHTML = "Estamos probando otras variables";
// });

// document.getElementById("boton").addEventListener("click", function () {
//     console.log('Hola mundo desde la concha de la lora');
//     document.getElementById("demo").innerHTML = "Estamos probando JS"
// });



document.getElementById("boton").addEventListener("click", function () {
     document.getElementById("lista").style.display = "block";
});

document.getElementById("boton1").addEventListener("click", function () {
         document.getElementById("lista").style.display = "none";
});



const fondo = document.querySelector('.fondo');

fondo.addEventListener('mouseenter', () => {
    fondo.style.backgroundColor = '#becef5';
});

fondo.addEventListener('mouseleave', () => {
    fondo.style.backgroundColor = 'white';
});



document.getElementById('linkedin').addEventListener('click', () => {
    alert('Será redireccionado al perfil de LinkedIn de Matias Sticca')
});


