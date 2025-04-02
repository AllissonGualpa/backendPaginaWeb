const express = require('express');
const router = express.Router();
const { User, Clima, user_clima, user_fav  } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'createdAt'],
      order: [['name', 'ASC']]
    });
    res.json({ success: true, data: users });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Error al obtener usuarios' });
  }
});

router.post('/crearUsuario', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nombre, email y contraseña son requeridos' 
      });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ 
        success: false, 
        message: 'El email ya está registrado' 
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: newUser.id }, 
      process.env.JWT_SECRET || 'secret123', 
      { expiresIn: '1d' }
    );

    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token 
    };

    res.status(201).json({ 
      success: true, 
      message: 'Usuario registrado', 
      data: userData 
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al registrar usuario' 
    });
  }
});

router.post('/iniciarSesion', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email y contraseña son requeridos' 
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Credenciales incorrectas' 
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ 
        success: false, 
        message: 'Credenciales incorrectas' 
      });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '1d' }
    );

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    };

    res.json({ 
      success: true, 
      message: 'Sesión iniciada', 
      data: userData 
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al iniciar sesión' 
    });
  }
});


// Obtener climas asociados a un usuario por ID
router.get('/:userId/climas', async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    const climas = await user_clima.findAll({
      where: { user_id: userId },
      include: [{
        model: Clima,
        attributes: ['id', 'name', 'temp', 'description', 'humidity', 'wind_speed']
      }],
      attributes: []
    });

    const climasData = climas.map(item => item.Clima);

    res.json({
      success: true,
      data: climasData
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener climas del usuario'
    });
  }
});

// Obtener lugares favoritos de un usuario por ID
router.get('/:userId/lugares', async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    const lugares = await user_fav.findAll({
      where: { user_id: userId },
      attributes: ['id', 'lugar', 'createdAt']
    });

    res.json({
      success: true,
      data: lugares
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener lugares favoritos'
    });
  }
});

module.exports = router;