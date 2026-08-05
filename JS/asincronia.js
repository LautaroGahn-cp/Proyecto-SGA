/*console.log("Inicio");
setTimeout(() => {
    console.log("Buscar alumnos");
}, 3000);
console.log("Fin");

function saludar(){
    console.log ("hola")
}

function ejecutar (funcion){
    funcion();
}

ejecutar (saludar)

function despedirse () {
    console.log("hasta luego")
}

setTimeout(despedirse, 3000);

setTimeout(() => {
   console.log("Buscando docentes...") 
}, 2000);

setTimeout(() => {
   console.log("buscando materias") 
}, 4000);

setTimeout(() => {
   console.log("Buscar el curso...") 
}, 1000);*/

/*console.log("abrimos SGA");

setTimeout(() => {
   console.log("Alumnos cargados...") 
}, 2000);

console.log("El usuario puede seguir navegando");*/

/*console.log("Solicitando lista de alumnos");

setTimeout(() => {
    console.log("Lista recibida...")
}, 5000);

console.log("Mientras tanto el programa sigue ejecutandose.")*/



/*function obtenerAlumnos(){
    return new Promise((resolve) => {   //Resolve hace que la promesa se guarde
        setTimeout(() => {
            console.log("Ya tengo el arrgelo listo")
            resolve(["Ana", "Juan", "Raul"]) 
        }, 3000);
    })
}

obtenerAlumnos().then((alumnos) => {
    console.log(alumnos);
})

async function iniciar() {
    const alumnos = await obtenerAlumnos()
    console.log(alumnos)
}
iniciar();

//Login usuario con then

login(usuario).then((usuario) => {
    return obtenerCursos (usuario.id)
}) 

.then((cursos) => {
    return obtenerNotas(cursos)
})

.then((notas) =>{
    console.log(notas)
})

// Login usuario con await

async function mostrarNotas() {
    try {
        const usuario = await login (usuario)
        const curso = await obtenerCursos (cursos)
        const notas = await obtenerNotas (notas)
    } 
    catch(error){
        console.log()
    }
}*/

/*function obtenerClima(){
    return new Promise((resolve) =>{
        setTimeout(() => {
           resolve("22°C - soleado") 
        }, 2000);
    })
}

//con then()
obtenerClima().then((clima)=>{
    console.log(clima)
});

//con aysnc/await
async function mostrarClima(){
    const clima = await obtenerClima()
    console.log(clima)
}

mostrarClima()*/

function consultarSaldo() {
    return new Promise ((resolve) => {
    setTimeout(() => {
        resolve(125000)    
    }, 3000);
})
}

async function mostrarSaldo() {
    const saldo = await consultarSaldo()
    console.log(`Su saldo es: $${saldo}`)
}

mostrarSaldo()

/*function iniciarSesion(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve("Bienvenido, Lautaro"); 
        }, 2000);
    })
}

async function mostrarUsuario(){
    const mensaje = await iniciarSesion()
    console.log(mensaje)
}

mostrarUsuario()*/

function obtenerUsuario(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nombre: "Maria",
                edad: 25
            })
        }, 3000);
    })
}

async function mostrarUsuario(){
    console.log("Consultado usuario...")
    const usuario = await obtenerUsuario()
    console.log(usuario)
}

mostrarUsuario()