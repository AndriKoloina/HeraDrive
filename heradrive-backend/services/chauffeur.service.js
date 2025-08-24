const db = require('../config/db')

const createDriver = async(nom, prenom, phone, permisid, cin, photo) => {
    const query = 'INSERT INTO public."chauffeurs" (nom, prenom, phone, permisid, cin, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
    const values = [nom, prenom, phone, permisid, cin, photo]
    const result = await db.query(query, values)
    return result
}

const findByCin = async (cin) => {
    const query = 'SELECT * FROM public."chauffeurs" where cin = $1'
    const result = await db.query(query, [cin])
    return result.rows[0]
}

module.exports = {createDriver, findByCin}