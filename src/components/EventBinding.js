import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler(){
  //   this.setState({
  //     message: this.state.message === 'Goodbye' ? 'Hello' : 'Goodbye'
  //   })
  //   console.log(this)
  // }

  clickHandler = () => {
    this.setState({
      message: this.state.message === 'Goodbye' ? 'Hello' : 'Goodbye'
    })

    console.log(this)
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Change Me</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Change Me</button> */}
        <button onClick={this.clickHandler}>Change Me</button>
      </div>
    )
  }
}

export default EventBinding
