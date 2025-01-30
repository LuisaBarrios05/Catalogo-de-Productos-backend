module.exports = (req, res, next) => {
    const { user } = req; // usuario autenticado
    if (user && user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: '🚫 Acceso denegado. Solo para administradores.' });
};
