const mongoose = require('mongoose');


const expressionSchema = new mongoose.Schema({
    title : String,
    gender : String,
    age : Number,
    state : String,
    city : String,
    expression : String,
    comments: {
        type : Array,
        default: []
    }
});


const Expression = mongoose.model('Expression', expressionSchema);

module.exports = Expression;