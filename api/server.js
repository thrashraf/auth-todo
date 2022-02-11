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

const userRoute = require('./routes/usersRoutes')
const adminRoute = require('./routes/adminRoute')
const todoRoute = require('./routes/todoRoute')

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



app.use('/api', userRoute, adminRoute, todoRoute)


app.get('/user/verify-email', async(req, res) => {

  try {
    const token = req.query.token;
    console.log(token)
    const user = await User.findByIdAndUpdate({_id: token }, {isVerified: true})
    .then(userInfo => {
      res.redirect('/login')
    })
  } catch (error) {
    
  }
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