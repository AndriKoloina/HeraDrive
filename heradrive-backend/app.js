const express = require('express')
const dotenv = require('dotenv')
const userRoute = require('./routes/user.route')
const voitureRoute = require('./routes/voiture.route')
const chauffeurRoute = require('./routes/chauffeur.route')
const permisRoute = require('./routes/permis.route')

const authMiddleware = require('./middleware/authMiddleware')

dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/auth', userRoute)
app.use('/car', voitureRoute)
app.use('/driver', chauffeurRoute)
app.use('/permis', permisRoute)

app.get('/api/protected', authMiddleware(['administrateur', 'gestionnaire']), (req, res) => {
    res.json({message: 'Bienvenue, accès autorisé ', user: req.user})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`))