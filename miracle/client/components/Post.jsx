import React from "react";
import { Link } from "react-router-dom";

import Comments from "./Comments";
import { deletePost, getCommentsByPostId, likePost, getLikes } from "../api";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      comments: [],
      likes: ''
    };
    this.deletePost = this.deletePost.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
    this.likePost = this.likePost.bind(this);
    this.fetchLikes = this.fetchLikes.bind(this);
  }

  componentDidMount() {
    const id = this.props.post.id || this.props.match.params.id;
    if (id) {
      this.fetchComments(id);
      this.fetchLikes(id);
    }
  }

  fetchLikes(id) {
console.log(id);
    getLikes(id).then((data2) => {
      
    
      this.setState({likes : data2.data[0].likes})})
  }

  fetchComments(postId) {
    getCommentsByPostId(postId)
      .then(comments => this.setState({ comments: comments }))
      .catch(err => this.setState({ errorMessage: err.message }));
  }

  deletePost() {
    deletePost(this.props.post.id)
      .then(this.props.fetchPosts)
      .catch(err => this.setState({ errorMessage: err.message }));
  }

  

  likePost() {
    console.log(this.state);
    
    likePost(this.props.post.id)
      .then(data => { 
        getLikes(this.props.post.id).then((data2) => {
         
          // console.log(data2);
          // console.log('here');
          // console.log(data2.data[0].likes);
          
          this.setState({likes : data2.data[0].likes})})
        })
      
    
      
        
        // this.setState({likes : data.data.likes})})
      .catch(err => this.setState({ errorMessage: err.message }));
  }

  render() {
    const { title, paragraphs, id } = this.props.post;
    let date = this.props.post.date_created;
    return (
      <div className="post">
        <Link to={`/posts/${id}`}>
          <header className="post-header">
            <h2 className="post-title">{title}</h2>
            <p className="post-meta">
              Date Created: {new Date(date).toDateString()}
            </p>
          </header>
        </Link>
        {paragraphs.map((para, key) => {
          return <p key={key}>{para}</p>;
        })}
        <div className="pure-button-group" role="group">
          <Link to={`/posts/edit/${id}`}>
            <button className="button-secondary pure-button">Edit</button>
          </Link>

          
          <button className="pure-button pure-button-primary"
          onClick={this.likePost}
          >Like</button>
          

          <button
            className="button-error pure-button"
            onClick={this.deletePost}
          >
            Delete
          </button>
        </div>
        <Link to={`/posts/${id}`}>
          <div className="comment-count">
            {this.state.comments.length} Comments 
            <p></p>
            {this.state.likes || 0} Likes
          </div>
        </Link>
        {this.props.path !== "/" && (
          <Comments
            postId={id}
            comments={this.state.comments}
            fetchComments={this.fetchComments}
          />
        )}

        {this.state.errorMessage && this.state.errorMessage}
      </div>
    );
  }
}

Post.defaultProps = {
  post: {
    title: "",
    date: "",
    id: null,
    paragraphs: []
  }
};

export default Post;
