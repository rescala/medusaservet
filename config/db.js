const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})


const conectarDB = async () => {

try {
    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('BD connected');


} catch (error) {
    console.log("POS QUE VALIO BERRTHAAA"+error)
    process.exit(1) //Se detiene la app
}

}

module.exports = conectarDB