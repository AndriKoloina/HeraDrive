const db = require('../config/db')

const createUser = async (nom, prenom, email, password, role) => {
    const query = 'INSERT INTO public."users" (nom, prenom, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING * '
    const values = [nom, prenom, email, password, role]
    const result = await db.query(query, values)
    return result.rows[0]
}

const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM public."users" WHERE email = $1'
    const result = await db.query(query, [email])
    return result.rows[0]
}

module.exports = {createUser, findUserByEmail}