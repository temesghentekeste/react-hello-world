import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        <ComponentE/>
      </div>
    )
  }
}

export default ComponentC
