const db = require('../config/db')

const createLieu = async (nom, region) => {
    const query = 'INSERT INTO public."lieux"(nom, region) VALUES ($1, $2) RETURNING *'
    const values = [nom, region]
    const result = await db.query(query, values)
    return  result.rows[0]
}

const findLieuByNomAndRegion = async (nom, region) => {
    const query = 'SELECT * FROM public."lieux" WHERE nom = $1 AND region = $2'
    const result = await db.query(query, [nom, region])
    return result.rows[0]
}

const findAll = async() => {
    const query = 'SELECT * FROM public."lieux"'
    const result = await db.query(query)
    return result.rows
}

module.exports = { createLieu, findLieuByNomAndRegion, findAll }