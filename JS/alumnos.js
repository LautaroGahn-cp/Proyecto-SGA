const alumnos = [
    {
        id: 1,
        nombre: "Ana"
    },

    {
        id: 2,
        nombre: "Juan"
    }
];

function obtenerAlumnos(){
    return new Promise ((resolve) => {
        setTimeout(() => {
           resolve(alumnos) 
        }, 2000);
    })
}

async function iniciar() {
    const datos = await obtenerAlumnos()
    console.table(datos)
}

iniciar()

// crear obtenerMaterias()
// crear obtenerDocentes()