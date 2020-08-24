import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  increment(){
    // this.setState({
    //   count: this.state.count + 1
    // }, console.log('callback:', this.state.count))

    this.setState((prev)=>({
      count: prev.count + 1
    }), () => console.log(this.state.count))
  }

  incrementByFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=> this.increment()}>Increment Count</button>
        <button onClick={()=> this.incrementByFive()}>Increment Count</button>
      </div>
    )
  }
}

export default Counter
