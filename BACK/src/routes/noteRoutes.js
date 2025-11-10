import express from "express"

const router=express.Router()

//Obtener todas las notas
router.get("/", ()=>{
    console.log("Envaindo las notas")
})
//Obtener notas por id
router.get("/:id", (req, res)=>{
    const id=req.params.id
    console.log(`Nota encontrada con el id ${id}`)
})
//Crear una nueva nota
router.post("/", (req, res)=>{
    const {title, description}= req.body
    console.log(req.body)
    console.log(title, description)
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