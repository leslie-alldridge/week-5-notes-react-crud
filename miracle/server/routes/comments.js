const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.use(express.json())

router.put('/:commentId', (req, res) => {
    db.updateComments(req.body).then(lmao => {
        res.json(lmao)
    })
})

router.delete('/:id', (req, res) => {
    db.deleteGG(req.params.id)
        .then(() => {
            res.json({})
        })
})

module.exports = router