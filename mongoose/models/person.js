// first step we need to do when defining a schema is import mongoose
const mongoose = require('mongoose')

// this pulls the Schema constructor(class) from mongoose
const { Schema } = mongoose

// now we'll build our actual Schema
// we create a new instance of the Schema class and save it to a variable for easy reference
const personSchema = new Schema({
    // in here is where we define the shape of our data
    // this sets the rules for our model, and by extension, our documents
    // we basically set up our key:val pairs
    // we do this by setting the name of the key and assigning a data type
    // we can do it like this:
    // firstName: String,
    // lastName: String
    // or we can be even more precise, set more rules for our data
    // this method of defining our fields allows for validation
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    dob: {
        type: Date,
        require: true
    },
    height: {
        type: Number,
        require: true,
        min: 0
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {virtuals: true}
})

// virtuals
// virtuals are 'virtual' fields that take information from the document and add fields that we can retrieve when we find(read a document)
// virtual data is not saved in the database, it is processed at runtime when the data is retrieved
personSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName
})

personSchema.virtual('age').get(function () {
    return Math.floor(Math.abs((Date.now() - this.dob)/3.154e+10))
})

personSchema.virtual('drinkLegally').get(function () {
    return this.age > 20
})
// mongoose.model is a built-in method(fn) that creates models
// models are constructor functions that create instances based on the schema
// these instances are documents that are stored as BSON in our mongoDb
// the model functions takes two arguments, the reference and the schema to use
const Person = mongoose.model('Person', personSchema)

// at the very end, we need to export this as a module
module.exports = Person

