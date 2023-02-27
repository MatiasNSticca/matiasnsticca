

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


