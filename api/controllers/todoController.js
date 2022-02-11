const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
require('dotenv').config()

module.exports.createTodo = async(req, res) => {
    
    const {input, isCheck} = req.body
  
    const todoId = new mongoose.Types.ObjectId()
    const todo = {todoId, input, isCheck}
  
    const cookie = jwt.verify(req.cookies.token, process.env.SECRET);
  
    console.log(cookie.id)
  
    User.findByIdAndUpdate({_id: cookie.id}, {$push: {todo: todo}})
    .then(userInfo => {
      res.json({todoId: todoId, input: input, isCheck: false})
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports.updateTodo = async(req, res) => {
    
    const { id, isCheck } = req.body
    //console.log(isCheck)
    //console.log(req.cookies)
    const cookie = jwt.verify(req.cookies.token, process.env.SECRET);

    User.findOneAndUpdate({_id: cookie.id}, {$set: {'todo.$[el].isCheck': isCheck}}, { 
        arrayFilters: [{ "el.todoId": mongoose.Types.ObjectId(id) }],
        new: true
    })
    .then(userInfo => {
        res.json(userInfo)
    })
    .catch(err => {
        res.json(err)
    })

}
module.exports.deleteTodo = async(req, res) => {
    
    const id = req.params.id;
    const cookie = jwt.verify(req.cookies.token, process.env.SECRET);
    console.log(id)

    User.findOneAndUpdate({_id: cookie.id}, {$pull: {"todo": {todoId: mongoose.Types.ObjectId(id)}}})
    .then(userInfo => {
        res.json({todo: userInfo.todo})
    })
    .catch(err => {
        res.json(err)
    }) 
}