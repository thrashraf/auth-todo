const User = require('../models/User');
const transporter = require('../config/nodemail');
const bcrypt = require('bcrypt');


module.exports.singUp = async (req, res) => {

        const {name, email, password} = req.body;
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
          const checkExistingEmail = await User.findOne({email})
    
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
                <a href="http://${req.headers.host}/user/verify-email?token=${userInfo._id}">Verify</a>`
        }
    
            transporter.sendMail(mailOptions, async(err) => {
                if (err) {
                console.log(err)
                } else {
                    res.json({msg: 'Please verify your email.'})
                }
        
            })
        })
    
        } catch (error) {
          console.log(error);
          res.sendStatus(500);
        }
}

