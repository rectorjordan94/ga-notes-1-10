const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello, stranger')
})

router.get('/:name', (req, res) => {
    const nameParam = req.params.name
    res.send(`Hello, ${nameParam}`)
})



module.exports = router