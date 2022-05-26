const express = require('express')

const { Router } = express

const personasRouter = Router()

let personas = []

const middlewarePersonaValidator = (req, res, next) =>{
    const newPersona = req.body
    if (!newPersona.nombre || newPersona.edad || newPersona.apellido) {
        console.log('Request invalido')
        return res.status(400).json({
            error: 'Body incompleto'
        })
    }
    return next()
}

/**PERSONAS */


personasRouter.get('', (req, res) => {
      return res.json(personas)
    })
  
personasRouter.post('', (req, res) => {
    const newPersona = req.body
  
    newPersona.id = personas.length + 1
  
    personas.push(newPersona)
  
    return res.status(201).json(newPersona)
  })

personasRouter.put('/:id', (req, res) => {
    
    const id = Number(req.params.id)
    const personaIndex = personas.findIndex(persona => persona.id === id)
  
    if (personaIndex === -1) {
      return res.status(404).json({
        error: 'Persona no encontrada'
      })
    }
  
    personas[personaIndex].Nombre = req.body.Nombre
    personas[personaIndex].Apellido = req.body.Apellido
    return res.json(personas[personaIndex])
    
  })
  
personasRouter.delete('/:id', (req, res) => {
    
    const id = Number(req.params.id)
    const personaIndex = personas.findIndex(persona => persona.id === id)
  
    if (personaIndex === -1) {
      return res.status(404).json({
        error: 'Persona no encontrada'
      })
    }
  
    personas = personas.filter(persona => persona.id !== id)
  
    return res.status(204).json({
        message: "This user was deleted."
    })
  })

module.exports = personasRouter
  
