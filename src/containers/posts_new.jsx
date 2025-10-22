import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <h3>PostsNew</h3>
        <form>
          <input />
        </form>
        <Link to="/posts">Back</Link>
      </div>
    );
  }
}

export default PostsNew;
