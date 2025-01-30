const express = require('express');
const router = express.Router();
const {
    createUser,
    deleteUser
} = require('../controllers/users');

// Crear un nuevo usuario
router.post('/', createUser);

// Eliminar un usuario por ID
router.delete('/:id', deleteUser);

module.exports = router;
