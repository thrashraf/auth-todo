const express = require('express');
const {singUp, login, user} = require('../controllers/userController')

const userRoute = express.Router()

userRoute.post('/user/signup', singUp)
userRoute.post('/user/login', login)
userRoute.get('/user/user', user)

module.exports = userRoute;