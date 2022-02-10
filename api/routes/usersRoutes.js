const express = require('express');
const {singUp} = require('../controllers/userController')

const router = express.Router()


router.post('/user/signup', singUp)

module.exports = router;