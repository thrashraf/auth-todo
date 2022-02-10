const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConnection = require('./config/db.js');


const cors = require('cors'); 
const bcrypt = require('bcrypt');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path')

const router = require('./routes/usersRoutes')

require('dotenv').config()

const port = process.env.PORT || 5000
const secret = process.env.SECRET

//import db connection
dbConnection()

app.use(cookieParser());
app.use(bodyParser.json());

//import sender email config


//cors setting
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))


// app.post('/signup', async (req, res) => {

// );

app.use('/api', router)


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