import React, { Component } from 'react'

class HoverCounter extends Component {
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
        <h1 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h1>
      </div>
    )
  }
}

export default HoverCounter
