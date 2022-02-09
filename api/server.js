const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()

const port = process.env.PORT || 5000

const path = require('path')

const secret = 'secret123'
const mongoUrl = process.env.MONGODB_URI;

console.log(mongoUrl)


const mongoServerHandler = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
}

mongoServerHandler()


app.use(cookieParser());
app.use(bodyParser.json());


//sender email config

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zulashrafvns@gmail.com',
    pass: 'ptsqvsmsjuniauos'
  },
  tls: {
    rejectUnauthorized: false
  }
})



app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))


app.post('/signup', async (req, res) => {

    const {name, email, password} = req.body;
    console.log(req.body)
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({name, email, password: hashedPassword, date: new Date(), role: 'user', isVerified: false});

    try {
      const checkExistingEmail = await User.findOne({email})

      if (checkExistingEmail) {

        return res.status(400).send({
          message: "email already exist"
        });
      }

      await user.save().then(userInfo => {
        jwt.sign({ id:userInfo._id, email:userInfo.email, name:userInfo.name }, secret, (err,token) => {

          if (err) {
            console.log(err);
            res.sendStatus(500);
            
          } else {
            // res.cookie('token', token, {httpOnly : false}).json({id:userInfo._id,email:userInfo.email, name:userInfo.name, redirectUrl: '/', todo: userInfo.todo});

            const mailOptions = {
              from: 'zulashrafvns@gmail.com',
              to: userInfo.email,
              subject: 'Verify your email',
              html: `<h2>Hello,</h2>
                    <p>Hi ${userInfo.name}! Please verify your email to continue...</p>
                    <a href="http://${req.headers.host}/user/verify-email?token=${userInfo._id}">Verify</a>`
            }

            transporter.sendMail(mailOptions, async(err) => {

              if (err) {
                console.log(err)
              } else {
                res.json({msg: 'Please verify your email.'})
              }

            })

          }
        });
      })

    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});


app.get('/user/verify-email', async(req, res) => {

  try {
    const token = req.query.token;
    console.log(token)
    const user = await User.findByIdAndUpdate({_id: token }, {isVerified: true})
    .then(userInfo => {
      
      res.redirect('http://localhost:3000/login')
      
    })
    
  } catch (error) {
    
  }
})



app.post('/login', (req, res) => {

  const {email, password} = req.body
  let route = '/';

  console.log(password)

  User.findOne({email})

  .then(userInfo => {

    console.log(userInfo)

    const isPassValid = bcrypt.compareSync(password, userInfo.password)

    if (isPassValid) {
      jwt.sign({id:userInfo._id,email:userInfo.email, name:userInfo.name}, secret, (err,token) => {
        if (err) {
          console.log(err);
          return res.status(401).send({
            message: "Invalid password"
          });
        } else {

          if (!userInfo.isVerified) return res.status(401).send({
            message: "Please verify your account"
          });
          
          if (userInfo.role === 'Admin' || userInfo.role === 'admin') {
            route = '/admin'
          }

          res.cookie('token', token, {httpOnly : false})
          .json({id:userInfo._id,email:userInfo.email, name:userInfo.name, redirectUrl: route, role: userInfo.role, todo: userInfo.todo});
          
        }
      });
    } else {

      return res.status(400).send({
        message: "password incorrect"
      });
    }

  });
})


app.get('/user', (req, res) => {

  const cookie = jwt.verify(req.cookies.token, secret);

  User.findById(cookie.id)
  .then(userInfo => {
    res.json(userInfo)
  })
})


app.post('/updateProfile', (req, res) => {

  const cookie = jwt.verify(req.cookies.token, secret);
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  User.updateOne({id: cookie.id}, {$set: {password: hashedPassword}})
  .then(userInfo => {
    console.log(userInfo)
  }).catch(err => {
    console.log(err)
  }) 
})


app.get('/admin', async (req, res) => {

  const users = await User.find({});

  const userMap = {};
  users.forEach((user) => {
      userMap[user._id] = user;
  });
  
  res.json(userMap);

})

app.delete('/deleteUser/:id', (req, res) => {

  const id = req.params.id

  User.findByIdAndDelete(id)
  .then(userInfo => {
    res.send(userInfo)
  })
  .catch(err => {
    console.log(err)
  })
})

app.get('/userDetail/:id', (req, res) => {

  const id = req.params.id;

  console.log(id)

  User.findById(id)
  .then(userInfo => {
    res.json(userInfo)
  })
})


app.post('/updateUserDetail', (req, res) => {

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
})


app.post('/createTodo', (req, res) => {

  const {input, isCheck} = req.body
  
  const todoId = new mongoose.Types.ObjectId()
  const todo = {todoId, input, isCheck}

  const cookie = jwt.verify(req.cookies.token, secret);

  console.log(cookie.id)

  User.findByIdAndUpdate({_id: cookie.id}, {$push: {todo: todo}})
  .then(userInfo => {
    res.json({todoId: todoId, input: input, isCheck: false})
  })
  .catch(err => {
    res.json(err)
  })

})

app.patch('/updateTodo', (req, res) => {
  
  const { id, isCheck } = req.body
  console.log(isCheck)
  console.log(req.cookies)
  const cookie = jwt.verify(req.cookies.token, secret);

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
})

app.delete('/deleteTodo/:id', (req, res) => {
  
  const id = req.params.id;
  const cookie = jwt.verify(req.cookies.token, secret);
  console.log(id)


  User.findOneAndUpdate({_id: cookie.id}, {$pull: {"todo": {todoId: mongoose.Types.ObjectId(id)}}})
  .then(userInfo => {
    res.json({todo: userInfo.todo})
  })
  .catch(err => {
    res.json(err)
  }) 
})

app.get('/UserTodos/:id', (req, res) => {

  const id = req.params.id

  User.findById({_id: id})
  .then(userInfo => {
    res.json({todo: userInfo.todo})
  })
  .catch(err => res.json(err))
})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('auth-client/build'));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../auth-client/build', 'index.html'));
  });

} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}
  

app.listen(port, () => console.log(`server is running on ${port}`)) 