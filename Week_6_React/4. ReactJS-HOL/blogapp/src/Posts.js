// src/Posts.js
import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ""
    };
  }

  // 6. Fetch Posts
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        this.setState({ hasError: true, errorMessage: error.message });
      });
  };

  // 7. Call API in componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // 9. Catch any rendering errors
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    this.setState({ hasError: true });
  }

  // 8. Render post list
  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red" }}>Something went wrong.</p>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
