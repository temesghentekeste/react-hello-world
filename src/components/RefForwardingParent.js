import React, { Component } from 'react'
import RefForwarding from './RefForwarding'

class RefForwardingParent extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }
  
  focusInput = () => {
    console.log('clicked')
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <br/>
        <RefForwarding ref={this.inputRef}/>
        <br/>
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    )
  }
}

export default RefForwardingParent
