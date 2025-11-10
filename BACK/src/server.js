import express from "express"
import noteRouter from "./routes/noteRoutes.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

app.use("/api/nota", noteRouter)


const PORT=process.env.PORT

app.listen(PORT,() =>{
    console.log(`Servidor levantado en el puerto http://localhost:${PORT}`)
})