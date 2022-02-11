const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.getAllUsers = async (req, res) => {

    const users = await User.find({});
    const userMap = {};

    users.forEach((user) => {
        userMap[user._id] = user;
    });
    
    res.json(userMap);
}


module.exports.deleteUser = async (req, res) => {

    const id = req.params.id
    console.log('lol')

    console.log(id)

    await User.findByIdAndDelete(id)
    .then(userInfo => {
        res.status(200).send(userInfo)
    })
    .catch(err => {
        console.log(err)
    })
}


module.exports.userTodo = async (req, res) => {

    const id = req.params.id

    await User.findById({_id: id})
    .then(userInfo => {
      res.status(200).json({todo: userInfo.todo})
    })
    .catch(err => res.json(err))

}

module.exports.getUserDetail = async (req, res) => {

    const id = req.params.id;
    console.log(id)

    await User.findById(id)
    .then(userInfo => {
        res.status(200).json(userInfo)
    })
    .catch(err => res.json(err))

}

module.exports.updateUserDetail = async (req, res) => {

    let params = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password ? bcrypt.hashSync(req.body.password, 10) : null
      }
    
      console.log(params.isAdmin)
      console.log(req.body.role)
    
      //this is to delete the null value
      for(let prop in params) if(!params[prop]) delete params[prop];
    
      console.log(params.role)
      User.findByIdAndUpdate({_id: req.body.id}, params)
      .then(userInfo => {
        res.json(userInfo)
      })
      .catch(err => {
        res.json(err)
    })

}