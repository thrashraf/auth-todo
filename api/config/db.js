const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`Mongo connect on ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

