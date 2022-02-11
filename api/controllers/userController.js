const User = require('../models/User');
const transporter = require('../config/nodemail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const env = process.env.NODE_ENV | 'dev'


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
    }

    await user.save().then(userInfo => {

      const mailOptions = {
        from: 'zulashrafvns@gmail.com',
        to: userInfo.email,
        subject: 'Verify your email',
        html: `<h2>Hello,</h2>
                <p>Hi ${userInfo.name}! Please verify your email to continue...</p>
                <a href="http://${req.headers.host}/api/user/verify-email?token=${userInfo._id}">Verify</a>`
      }

      transporter.sendMail(mailOptions, async (err) => {
        if (err) {
          console.log(err)
        } else {
          res.json({ msg: 'Please verify your email.' })
        }

      })
    })

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}


module.exports.login = async (req, res) => {

  const {email, password} = req.body
  
  let route = '/';
  console.log(password)

  User.findOne({email})
  .then(userInfo => {

  console.log(userInfo)

    const isPassValid = bcrypt.compareSync(password, userInfo.password)

    if (isPassValid) {
      jwt.sign({id:userInfo._id,email:userInfo.email, name:userInfo.name}, process.env.SECRET, (err,token) => {
        
        if (err) {
          console.log(err);
          return res.status(401).send({
            message: "Invalid password"
          });
        } else {

          if (!userInfo.isVerified) return res.status(401).send({message: "Please verify your account"});
          
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
  });
}



module.exports.user = async (req, res) => {

  const cookie = jwt.verify(req.cookies.token, process.env.SECRET);

  User.findById(cookie.id)
  .then(userInfo => {
    res.status(200).json(userInfo)
  })
}


module.exports.verifyUser = async (req, res) => {

  console.log(req.headers)

  try {
    const token = req.query.token;
    console.log(token)
    const user = await User.findByIdAndUpdate({_id: token }, {isVerified: true})
    .then(userInfo => {
      res.redirect(`${env === 'production' ? "https://todo-auth-v2.herokuapp.com/login" : 'http://localhost:3000/login' }`)
    })
  } catch (error) {
   console.log(error) 
  }

}
