const { application } = require('express')
const express = require('express')
const router = express.Router()

router.get('/:total/:percentage', (req, res) => {
    const totalParam = req.params.total
    const percentParam = req.params.percentage
    const tipAmount = totalParam * percentParam / 100
    res.send(`The tip amount is: ${tipAmount}`)
})

module.exports = router