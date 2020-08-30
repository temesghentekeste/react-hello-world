import React, { Component } from 'react'
import InputRef from './InputRef'

class InputRefParent extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef();
  }

  focusChildComp = () =>{
    this.componentRef.current.focusInput();
  }
  
  render() {
    return (
      <div>
        <br/>
        <InputRef ref={this.componentRef}/>
        <br/>
        <button onClick={this.focusChildComp}>Focus Input </button>
      </div>
    )
  }
}

export default InputRefParent
