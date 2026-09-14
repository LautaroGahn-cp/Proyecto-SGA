const mongoose = require("mongoose")

async function conectarBD() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("base de datos conectada")
    } catch (error) {
        console.log(error)
    }
}

module.exports = conectarBD