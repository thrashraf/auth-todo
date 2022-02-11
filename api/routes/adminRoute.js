const express = require('express');
const { getAllUsers, deleteUser, userTodo, getUserDetail, updateUserDetail } = require('../controllers/adminController')
const adminRouter = express.Router()


adminRouter.get('/admin/allUser', getAllUsers)
adminRouter.delete('/admin/deleteUser/:id', deleteUser)
adminRouter.get('/admin/UserTodo/:id', userTodo)
adminRouter.get('/admin/userDetail/:id', getUserDetail)
adminRouter.post('/admin/updateUserDetail', updateUserDetail)

module.exports = adminRouter;