const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Place = require('../../models/place')

// node scripts/place/delete.js 63c071381623e4506a71cfbd

// get the id of a place
const idUserInput = process.argv[2]

db.once('open', function () {
    // find the place by id
    Place.findById(idUserInput)
    // then delete the place and pass it down the promise chain
        .then(place => {
        return place.deleteOne()
        })
    // print a success message
        .then(place => {
            console.log('DELETED: \n', place)
        })
        .catch(console.error)
        .finally(() => db.close())
})