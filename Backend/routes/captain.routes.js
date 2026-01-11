const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 charachters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 charachters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 6 charachters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate number must be atleast 6 charachters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be atleast 6 charachters long'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle'),
],
    captainController.registerCaptain
);

module.exports = router;