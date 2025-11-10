import express from "express"
import Note from "../models/noteModel.js"

const router=express.Router()

//Obtener todas las notas
router.get("/", (req, res)=>{
   
})
//Obtener notas por id
router.get("/:id", (req, res)=>{
    const id=req.params.id
    console.log(`Nota encontrada con el id ${id}`)
})
//Crear una nueva nota
router.post("/", async (req, res)=>{
    try {
        const {title, description} = req.body
        const note = new Note({title, description})

        const saveNote =await note.save()

        if(!saveNote) return console.log("Error al crear la nota")
        
        res.status(200).json({message: "Nota creada correctamente" , note: saveNote})
    } catch (error) {
        console.error(`Error al crear la nota`, error)
        res.status(500).json({error: "Internal Server Error"})
    }
})
//Eliminar una nota
router.delete("/:id", (req, res)=>{
    const id = req.params.id
    console.log(`Eliminar nota por id ${id}`)
})
//Editar una nota
router.put("/:id", (req, res)=>{
    const id = req.params.id
    const updateData = req.body
    console.log(updateData)
    console.log(`Nota con el id ${id} editada`)
})
export default router