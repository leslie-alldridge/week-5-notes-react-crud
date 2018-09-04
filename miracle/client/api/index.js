import request from 'superagent'

export function getPosts () {
  return request.get('/v1/posts')
    .then(res => {
      const posts = res.body
      return posts
    })
    .catch(() => {
      throw Error('You need to implement an API route for /v1/posts')
    })
}

export function addPost (post) {
  post.paragraphs = post.paragraphs.split('\n')
  return request.post('/v1/posts')
    .send(post)
    .then(res => {
      const returnedPost = res.body
      return returnedPost
    })
}

export function updatePost (post, id) {
  post.id = id;
  post.paragraphs = post.paragraphs.split('\n')
  return request.put(`/v1/posts/${id}`)
    .send(post)
    .then(res => {
      const returnedPost = res.body
      return returnedPost
    })
}

export function deletePost (postId) {
  return request.del(`/v1/posts/${postId}`)
    .then(res => {
      const returnedPost = res.body
      return returnedPost
    })
}

export function getCommentsByPostId (postId) {
  
  
  return request.get(`/v1/posts/${postId}/comments`)
    .then(res => {
      const returnedComments = res.body
      return returnedComments
    })
}

export function addCommentByPostId (postId, comment) {
  let comment2 = {
    id: postId,
    comment: comment.comment
  }
  return request.post(`/v1/posts/${postId}/comments`)
    .send(comment2)
    .then(res => {
      const returnedComment = res.body
      return returnedComment
    })
    
}

export function updateComment (comment) {
  return request.put(`/v1/comments/${comment.location}`)
    .send(comment)
    .then(res => {
      const returnedComment = res.body
      return returnedComment
    })
}

export function deleteComment (commentId) {
  return request.del(`/v1/comments/${commentId}`)
    .then(res => {
      const returnedComment = res.body
      return returnedComment
    })
}

export function likePost (commentId) {
  // console.log(commentId);
  
  return request.put(`/v1/posts/like/${commentId}`)
    .then(res => {
      // console.log(res);
      
      const returnedComment = res.body
      return returnedComment
    })
}

export function getLikes (commentId) {
  console.log(commentId);
  
  return request.get(`/v1/posts/like/${commentId}`)
    .then(res => {
      console.log(res);
      
      const returnedComment = res.body
      return returnedComment
    })
}
