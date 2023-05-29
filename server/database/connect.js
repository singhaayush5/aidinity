require('dotenv').config()
const mongoose = require('mongoose');

const connect = async () => {
    try{
        const connection = await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});
        console.log("Successfully connected to the database.");
    } catch (err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connect;