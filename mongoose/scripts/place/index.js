const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Place = require('../../models/place')

db.once('open', function () {
    Place.find()
        .then(place => {
            place.forEach(place => {
                const foundPlaceJson = place.toJSON() 
                console.log('HERE IS THE FOUND PLACE \n', foundPlaceJson)
            })
        })
        .catch(console.err)
        .finally(() => db.close())
})