import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI
        mongoose.connect(dbURI)
        console.log(`MongoDB conectado corectamente`)
    } catch (error) {
        console.log(`Error al conectar con MongoDB`)
        process.exit(1)
    }
}