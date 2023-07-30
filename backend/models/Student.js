const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120,
    },
    gender: {
        type: String,
        required: true
    },

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;