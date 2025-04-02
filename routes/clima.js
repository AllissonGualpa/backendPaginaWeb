var express = require('express');
var router = express.Router();
const { Clima } = require('../models'); // Importa con destructuring
const { Sequelize } = require('sequelize'); // Importa Sequelize para usar Op

router.get('/obtenerClima', async function (req, res, next) {
    try {
        const nombreCiudad = req.query.name; // Obtener el nombre de la ciudad desde query params
        
        if (!nombreCiudad) {
            return res.status(400).json({ 
                success: false,
                message: 'El parámetro "name" es requerido',
                example: '/api/obtenerClima?name=Madrid'
            });
        }
    
        // Opción 1: Usar LOWER en ambos lados (compatible con MariaDB)
        const clima = await Clima.findOne({
            where: Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('name')),
                'LIKE',
                `%${nombreCiudad.toLowerCase()}%`
            )
        });
    
        if (!clima) {
            return res.status(404).json({ 
                success: false,
                message: `No se encontraron registros para la ciudad "${nombreCiudad}"`
            });
        }
    
        res.json(clima);
    } catch (error) {
        console.error('Error al buscar clima:', error);
        next(error);
    }
});

module.exports = router;