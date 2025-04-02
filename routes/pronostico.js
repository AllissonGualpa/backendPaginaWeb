var express = require('express');
var router = express.Router();
const { pronostico } = require('../models');
const { Sequelize } = require('sequelize');

router.get('/obtenerPronostico', async function (req, res, next) {
    try {
        const { ciudad } = req.query;
        
        // Validar que se proporcionó la ciudad
        if (!ciudad) {
            return res.status(400).json({ 
                success: false,
                message: 'El parámetro "ciudad" es requerido',
                example: '/api/obtenerPronostico?ciudad=Manta'
            });
        }

        // Buscar pronósticos para la ciudad (insensible a mayúsculas/minúsculas)
        const pronosticos = await pronostico.findAll({
            where: Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('cityName')),
                'LIKE',
                `%${ciudad.toLowerCase()}%`
            ),
            order: [['dt', 'ASC']] // Ordenar por fecha ascendente
        });

        // Si no se encuentran resultados
        if (pronosticos.length === 0) {
            return res.status(404).json({ 
                success: false,
                message: `No se encontraron pronósticos para ${ciudad}`
            });
        }

        // Formatear respuesta exitosa
        res.json({
            success: true,
            ciudad: pronosticos[0].cityName,
            coordenadas: pronosticos[0].cityCoord,
            pais: pronosticos[0].cityCountry,
            pronosticos: pronosticos.map(p => ({
                fecha: p.forecastDate,
                hora: p.dtTxt?.split(' ')[1] || '',
                temperatura: p.forecastTemp || p.currentTemp,
                descripcion: p.forecastDesc || p.weatherDescription,
                icono: p.weatherIcon,
                humedad: p.currentHumidity,
                viento: p.windSpeed
            }))
        });
    } catch (error) {
        console.error('Error al obtener pronósticos:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener pronósticos',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

module.exports = router;