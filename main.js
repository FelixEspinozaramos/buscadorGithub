// API ( aplicacion programing interface)
// endpoint, es un servicio el cual puede proveer informacion tambuen puede crear

// Usamos el api de github
// en java scrip existe una funcion el que se encarga de poder hacer la peticion.

// FETCH() = GET
// Varios tipos de peticiones
// GET -POST -PUT -DELETE

// funcion async
// esto es nuestra api 
// https://api.github.com/user/[nombre_usuario]

// estructura de la funcion async -- asincrona

// funcion normal
//async function obtenerDato(){
//}

const imagenProfile = document.querySelector("#img-profile")

const obtenerDatoGitHub = async () => {
    const response = await fetch ("https://api.github.com/users/FelixEspinozaramos")

    const data = await response.json();
    imagenProfile.src=data.avatar.url;
    console.log(data)

}
obtenerDatoGitHub()