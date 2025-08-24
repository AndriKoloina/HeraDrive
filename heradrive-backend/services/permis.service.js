const db = require('../config/db')

const createPermis = async (nom , description) => {
    const query = 'INSERT INTO public."permis"(nom, description) VALUES ($1, $2) RETURNING *'
    const values = [nom, description]
    const result = await db.query(query, values)
    return result.rows[0]
} 

module.exports = {createPermis}
