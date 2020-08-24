import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor(props){
    super(props)
  }
  render() {
    //Destructuring is done here
    const name = this.props.name
    //Destructuring state: const {st1, st2 ...} = this.state
    return (
      <div>
        <h1>Welcome, {name}</h1>
        {this.props.children}
      </div>
    )
  }
}

