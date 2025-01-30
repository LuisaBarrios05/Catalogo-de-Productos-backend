const { User } = require('../../models');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'El formato del email no es válido' });
        }

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            role: role || 'admin'
        });


        res.status(201).json({
            id: newUser.id,
            email: newUser.email,
            role: newUser.role,
            createdAt: newUser.createdAt
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }
};

module.exports = createUser;
