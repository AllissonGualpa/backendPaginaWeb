var express = require('express');
var router = express.Router();

router.get('/iniciarSesion', function (req, res, next) {
    res.render('auth/iniciarSesion', { 
        title: 'Iniciar Sesión',
    });
});

router.get('/registrarse', function (req, res, next) {
    res.render('auth/registrarse', { 
        title: 'Regístrate',
    });
});

module.exports = router;