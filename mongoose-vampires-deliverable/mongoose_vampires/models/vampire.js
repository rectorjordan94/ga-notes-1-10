const mongoose = require('mongoose')
const { Schema, model } = mongoose

const vampireSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    }, 
    hair_color: {
        type: String,
        default: 'blonde'
    },
    eye_color: {
        type: String
    }, 
    dob: {
        type: Date
    }, 
    loves: {
        type: Array
    }, 
    location: {
        type: String
    }, 
    gender: {
        type: String
    }, 
    victims: {
        type: Number,
        min: 0
    }
}, {
    strict: false
})

const Vampire = model('Vampire', vampireSchema)

module.exports = Vampire
