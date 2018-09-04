const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    db.getPosts().then((data) => {
        let paragraph = data.map(paragraph => {
            paragraph.paragraphs = JSON.parse(paragraph.paragraphs)
            return paragraph
        })
        res.json(paragraph)
    })
})

router.post('/', (req, res) => {
    const post = req.body
    post.paragraphs = JSON.stringify(post.paragraphs)
    post.date_created = new Date().toDateString()

    db.addPost(post)
        .then((data) => {
            res.json(data)
        })
})

router.put('/:id', (req, res) => {

    db.updatePost(req.body, req.params.id).then((data) => {

        res.json(data)
    })
})

router.get('/:postId/comments', (req, res) => {
    db.getComments(req.params.postId).then((data) => {
        res.json(data)
    })
})

router.post('/:postId/comments', (req, res) => {
    db.addComments(req.body).then((comment) => {
        db.getComments(comment).then((data) => {
            res.json(data)
        })
    })
})

router.delete('/:id', (req, res) => {
    db.deletePost(req.params.id).then((data) => {
        res.json({})
    })

})

router.put('/like/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    db.likePost(id).then((data) => {
        console.log(data);
        
        res.json({data})
    })

})


router.get('/like/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    db.getLikes(id).then((data) => {
        console.log(data);
        
        res.json({data})
    })

})
module.exports = router