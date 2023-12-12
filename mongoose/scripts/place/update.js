const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Place = require('../../models/place')

// node scripts/people/update.js <place id> <the key of the field to update> <the value to update with>

// node scripts/people/update.js 63c071381623e4506a71cfbd name Flavortown

const idUserInput = process.argv[2]
// get the key to update
const keyUserInput = process.argv[3]
// the value to update
const valueUserInput = process.argv[4]


db.once('open', function () {
    // find place by id
    Place.findById(idUserInput)
    // update place
        .then(place => {
            place[keyUserInput] = valueUserInput
            return place.save()
    })
    // print updated place
        .then(place => {
        console.log('UPDATED: \n', place)
    })
    // catch errors
    .catch(console.error)
    // finally close db
    .finally(() => db.close())
})