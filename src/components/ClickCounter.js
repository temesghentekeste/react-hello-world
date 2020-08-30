import React, { Component } from 'react'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }

  }
    incrementCount = () => {
      this.setState(prev => {
        return {count: prev.count + 1}
      })
    }
  
  render() {
    return (
      <div>
        <br/>
        <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClickCounter
