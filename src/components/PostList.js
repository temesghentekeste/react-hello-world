import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  state = {
    posts: [],
    errorMsg: ''
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( response => {
        this.setState({
          posts: response.data
        })
      }).catch(err=>this.setState({errorMsg: 'Unable to fetch data.'}));
  }
  render() {
    const {posts, errorMsg} = this.state;
    const postList = posts.map(post => <div key={post.id}>{`${post.id}. ${post.title}`}</div>)
   
    return (
      <div>
        <h1>List of Posts</h1>
        {
            postList.length ? postList : errorMsg
        }
      </div>
    )
  }
}

export default PostList
