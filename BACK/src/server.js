import express from "express"
import noteRouter from "./routes/noteRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use("/api/nota", noteRouter)


const PORT=process.env.PORT

connectDB()
.then(() => {
    app.listen(PORT,() =>{
        console.log(`Servidor levantado en el puerto http://localhost:${PORT}`)
    })
})
