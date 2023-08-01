const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    regNumber: {
        type: Number,
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
    address: {
        type: String
    },
    contactNumber: {
        type: Number
    }


});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;