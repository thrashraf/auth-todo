const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config()


module.exports.singUp = async (req, res) => {

  const { name, email, password } = req.body;
  console.log(req.body)

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    date: new Date(),
    role: 'user',
    isVerified: false
  });

  try {

    //this is to check if email already use or not
    const checkExistingEmail = await User.findOne({ email })

    if (checkExistingEmail) {

      return res.status(401).send({
        message: "email already exist"
      });
    } else {

      await user.save()
      res.status(201).json({redirect: '/login'})
    }


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


module.exports.login = (req, res) => {

  const {email, password} = req.body
  
  let route = '/';
  //console.log(password)

  User.findOne({email})
  .then(userInfo => {

    //console.log(userInfo)

    console.log(password)
    const isPassValid = bcrypt.compareSync(password, userInfo.password)

    if (isPassValid) {
      jwt.sign({id:userInfo._id,email:userInfo.email, name:userInfo.name}, process.env.SECRET, (err,token) => {
        
        if (err) {
          console.log(err);
          return res.status(401).send({
            message: "Invalid password"
          });
        } else {
          
          if (userInfo.role === 'Admin' || userInfo.role === 'admin') {
            route = '/admin'
          }

          res.cookie('token', token, {httpOnly : false})
          .json({
            id:userInfo._id,
            email:userInfo.email, 
            name:userInfo.name, 
            redirectUrl: route, 
            role: userInfo.role, 
            todo: userInfo.todo
          });
        }
      });

    } else {
      return res.status(400).send({
        message: "password incorrect"
      });
    }
  }).catch(err => {
    res.status(400).send({
      message: "password incorrect"
    });
  })
}

module.exports.user = (req, res) => {

  const cookie = jwt.verify(req.cookies.token, process.env.SECRET);

  User.findById(cookie.id)
  .then(userInfo => {
    res.status(200).json(userInfo)
  })
  .catch(err => {
    console.log(err)
    
  })
}



module.exports.updateUser = async(req, res) => {

  const cookie = await jwt.verify(req.cookies.token, process.env.SECRET);
  //console.log(cookie)
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  console.log(req.body.password)

  await User.findByIdAndUpdate({_id: cookie.id}, {$set: {password: hashedPassword}})
  .then(userInfo => {

    console.log(userInfo)
    res.status(200).json({message: 'successfully update password!'})

  }).catch(err => {
    console.log(err)
    res.status(400).json({message: 'password not match'})

  }) 

}
