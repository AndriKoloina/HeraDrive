const db = require('../config/db')

const createCar = async (marque, modele, immatriculation) => {
    const query = 'INSERT INTO public."voitures" (marque, modele, immatriculation) VALUES ($1, $2, $3) RETURNING *'
    const values = [marque, modele, immatriculation]
    const result = await db.query(query, values)
    return result.rows
}


const findByImmatriculation = async (immatriculation) => {
    const query = 'SELECT * FROM public."voitures" where immatriculation = $1'
    const result = await db.query(query, [immatriculation])
    return result.rows[0]
}
module.exports = {createCar, findByImmatriculation}