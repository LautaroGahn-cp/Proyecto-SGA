# Sistema de Gestión Académica (SGA)

Proyecto desarrollado durante la materia Programación IV.

clase 10 estrucutura actual
SGA/
|__Backend/
|  |______.config/
|  |      |______database.js
|  |
|  |______.routes/
|  |      |______routes.js
|  |
|  |______.controllers/
|  |      |___________alumnos.controller.js
|  |
|  |______.data/
|  |      |____alumnos.js
|  |
|  |______.models/
|  |      |______Alumno.js
|
|__Frontend/
|  |_______HTML/
|  |         |_____index.html
|  |         |_____alumnos.html
|  |         |_____docentes.html
|  |
|  |_______CSS/
|  |        |_____estilo.css
|  |       
|  |
|  |_______JS/
|          |________alumnos.js
|          |________docentes.js
|
|
## Estado actual del proyecto 
-Pagina de inicio y navegacion
-Modulo alumno-docente
-CRUD alumno/docente
-Peresistencia mediante localStorage
-Organizacion del codigo y refactorizacion
-Separacion inicial entre frontend y backend
-Implementacion de validaciones para los datos recibidos mediante req.body
-Uso de status 400 para datos invaidos
-Uso de status 404 para alumno no encontrado
-Uso status 201 para regisatrar nuevo alumno
-Manejo basico de errores en las operaciones de CRUD
-Instalacon de Mongoose
-Creacion de la conexion con MongoDB en confing/database.js
-Creacion de Schema y Modelo
-Remplazo de la array de memoria por una coneccion de mongoDB 
-Modificacion de GET /alumnos para consultar mongoDB mediante mongoose
-Prueba de API con datos almacenados en MongoDB

## Alamacenamiento

-localStorage
-json.stingify()
-json.parse()
-MongoDB

## Descripción

El Sistema de Gestión Académica (SGA) es una aplicación web que permitirá administrar alumnos, docentes, cursos y materias.
Durante el desarrollo del proyecto se incorporarán progresivamente nuevas tecnologías y funcionalidades.


## Objetivos

- Gestionar alumnos.

- Gestionar docentes.

- Gestionar cursos.

- Gestionar materias.

- Implementar autenticación de usuarios.

- Consumir una API REST.

- Persistir la información en MongoDB.


## Tecnologías

Actualmente:
- HTML5

- CSS3

- JavaScript

- React

- Node.js

- Express

- MongoDB

Proximamente
- React

🚧 En desarrollo.


## Autor

Lautaro Gahn
Programación IV

