const mongoose = require('mongoose');


const expressionSchema = new mongoose.Schema({
    title : String,
    sex: String,
    age: Number,
    expression: String,
    comments: {
        type : Array,
        default: []
    }
});


const Expression = mongoose.model('Expression', expressionSchema);

module.exports = Expression;