import React, { Component } from 'react'

class ClickCounterTwo extends Component {
 
  render() {
    const {count, incrementCount} = this.props;
    return (
      <div>
        <br></br>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
