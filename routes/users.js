//rutas user
const express = require('express');
const { route } = require('express/lib/application');
const  userController = require ('../controllers/userController');
const router = express.Router();

// llamada al controller
router.post('/', userController.checkUser)
router.get('/', userController.allUser)
router.put('/:id', userController.updateUser)
router.get('/:id', userController.obtenerUser)
router.delete('/:id', userController.deleteUser)


module.exports = router;