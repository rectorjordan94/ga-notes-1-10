const { application } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall</br><a href="/bottles/98">take one down, pass it around</a>`)
})

router.get('/:numBottles', (req, res) => {
    numBottles = req.params.numBottles
    if (numBottles > 0) {
        res.send(`${numBottles} Bottles of beer on the wall</br><a href="${numBottles-1}">take one down, pass it around</a>`)
    } else {
        res.send(`<a href="/bottles">Start Over</a>`)
    }
    
})





module.exports = router