const express = require('express');
const {singUp, login, user, verifyUser, updateUser} = require('../controllers/userController')

const userRoute = express.Router()

userRoute.post('/user/signup', singUp)
userRoute.post('/user/login', login)
userRoute.get('/user/user', user)
userRoute.get('/user/verify-email', verifyUser)
userRoute.post('/user/updateProfile', updateUser)


module.exports = userRoute;