const userService = require('../services/user.service')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const {nom, prenom, email, password, role} = req.body
    const existingUser = await userService.findUserByEmail(email)
    if (existingUser) return res.status(400).json({message : 'Email déjà utilisé'})
    
    const hashePassword = await bcrypt.hash(password, 10)
    const user = await userService.createUser(nom, prenom, email, hashePassword, role || 'gestionnaire')

    res.status(201).json({
        message: 'Utilisateur créé',
        user: {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            role: user.role
        }
    })
}

const login = async (req, res) => {
    const {email, password} = req.body
    const user = await userService.findUserByEmail(email)

    if(!user) return res.status(400).json({message : 'Identifications invalides'})
    
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) return res.status(400).json({ message : 'Identifiants invalides'})

    const token = jwt.sign(
        {userId: user.id, role: user.role},
        process.env.auth_secret,
        {expiresIn : process.env.jwt_expiresIn }
    )
    res.json({ token })

}

const logout = (req, res) => {
    res.status(200).json({message : "Deconnexion réussi, token supprimé"})
}

module.exports = {
    register, login, logout
}