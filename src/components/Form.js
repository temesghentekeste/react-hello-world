import React, { Component } from 'react'
import './form.css'
class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
       
    }
  }
  
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  };

  handleCommentsChange = e => this.setState({
    comments: e.target.value
  });

  handleTopicChange = e => this.setState({
    topic: e.target.value
  })

  handlSubmit = (e) => {
    alert(`${this.state.username} | ${this.state.comments} | ${this.state.topic}`)
    e.preventDefault();
  }
  
  render() {
    const {username, comments,topic} = this.state;
    return (
      <div class="container">
        <h1>React Basic Form</h1>
        <form onSubmit={this.handlSubmit} className="form">
        <div>
          <label className="label input">Username</label>
            <input className="input form-control" 
            value={username} 
            onChange={this.handleUsernameChange}
            type="text"/>
        </div>
        <div>
          <label className="label input">Comments</label>
          <textarea 
            class="input form-control" 
            value={comments} 
            onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label className="label input">Topic</label>
          <select 
            className="input form-control"
            value={topic} 
            onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
