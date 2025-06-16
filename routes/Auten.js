const express = require('express');
const router = express.Router();
const AutenController= require('../controllers/AutenController');


//Rutas de autenticacion

router.post('/Registrar', AutenController.registeruser );
router.post('/Login', AutenController.autenticaruser );

module.exports = router;
