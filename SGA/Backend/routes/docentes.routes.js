const express  = require ("express")
const { obtenerDocentes, obtenerDocente, crearDocente, eliminarDocente, actualizarDocente } = require("../controllers/docentes.cotroller")
const router = express.Router()

router.get("/", obtenerDocentes) 
router.get("/:id", obtenerDocente)
router.post("/", crearDocente)
router.put("/:id", actualizarDocente)
router.delete("/:id", eliminarDocente)

module.exports = router