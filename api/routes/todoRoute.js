const express = require('express');
const { createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const todoRoute = express.Router();

todoRoute.post('/todo/createTodo', createTodo)
todoRoute.patch('/todo/updateTodo/:id', updateTodo)
todoRoute.delete('/todo/deleteTodo/:id', deleteTodo)

module.exports = todoRoute;