import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from './userContext'

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h1>Component E context {this.context}</h1>
        <ComponentF/>
      </div>
    )
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE
