const jwt = require('jsonwebtoken');

const authMiddleware = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ message: 'Token manquant' })

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.auth_secret);
      if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Accès refusé' })
      }
      req.user = decoded
      next()
    } catch {
      res.status(403).json({ message: 'Token invalide' })
    }
  }
}

module.exports = authMiddleware
