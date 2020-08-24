import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  //using arrow function for event binding
  greetMe = (message)=>{
    alert(message)
    console.log(this)
  }
  render() {
    return (
      <div>
        <Child clickHandler={this.greetMe}/>
      </div>
    )
  }
}

export default Parent
