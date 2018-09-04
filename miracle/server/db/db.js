const config = require('../../knexfile').development
const db = require('knex')(config)
getPosts = () => {
    return db('Posts').select()
}

addPost = (post) => {
    return db('Posts')
        .insert(post)
        .then(id => {
            addLike(id)
            return db('Posts')
                .where('id', id[0])
                .first()
        })    
}


updatePost = (post, id) => {
    post.paragraphs = JSON.stringify(post.paragraphs)
    return db('Posts')
        .where({
            id: id
        })
        .update({
            title: post.title,
            paragraphs: post.paragraphs
        })

}

getComments = (post) => {

    return db('Comments').
    where({
        'post_id': post
    })
}

addComments = (commentText) => {
    return db('Comments').insert({
        comment: commentText.comment,
        post_id: commentText.id
    })
}

updateComments = (commentUpdate) => {
    let newCom = commentUpdate.comment;
    return db('Comments')
        .where({
            comment: commentUpdate.id
        })
        .update({
            comment: newCom
        })

}
deleteGG = (theComment) => {
    return db('Comments').where({
        id: theComment
    }).del()
}

deletePost = (id) => {
    return db('Posts').where({
        id: id
    }).del()
}

getLikes = (id) => {
    return db('Likes')
    .where({
        post_id: id
    })
}


likePost = (id) => {
    return db('Likes')
    .where({
        post_id: id
    })
    .increment('likes', 1)
}

addLike = (id) => {
    console.log(id);
    console.log('wtfff');
    return db('Likes')
    .insert({post_id: id[0], likes: 1})
    .then((data) => {
        console.log(data);
        
    })
}

module.exports = {
    getPosts,
    addPost,
    updatePost,
    getComments,
    addComments,
    updateComments,
    deleteGG,
    deletePost,
    likePost,
    getLikes
}