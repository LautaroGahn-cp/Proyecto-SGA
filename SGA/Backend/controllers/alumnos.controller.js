function obtenerAlumnos(req, res){  //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    res.json(alumnos)
}

module.exports = {obtenerAlumnos}