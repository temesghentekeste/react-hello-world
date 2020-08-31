import React, { Component } from 'react'
import axios from 'axios'
import './form.css'
class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userId: '',
      title: '',
      body: ''
       
    }
  }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handlSubmit = (e) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    e.preventDefault();
  }
  
  render() {
    const {userId, title, body} = this.state;
    return (
      <div class="container">
        <h1>HTTP Post Request</h1>
        <form onSubmit={this.handlSubmit} className="form">
        <div>
          <label className="label input">User Id</label>
            <input className="input form-control" 
            name="userId"
            value={userId} 
            onChange={this.changeHandler}
            type="text"/>
        </div>
        <div>
          <label className="label input">Post Title</label>
          <input 
            className="input form-control" 
            name="title"
            value={title} 
            onChange={this.changeHandler}
            type="text"/>
        </div>
        <div>
          <label className="label input">Body</label>
          <input 
            className="input form-control" 
            name="body"
            value={body} 
            onChange={this.changeHandler}
            type="text"/>
        </div>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
