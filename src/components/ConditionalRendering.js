import React, { Component } from 'react'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin: false
    }
  }
  
  render() {
    // using if/else, we cannot use if/else inside jsx it is not valid
    // if(this.state.isLoggedin){
    //   return (
    //     <div>
    //       <div>Hello Temesghen</div>
    //     </div>
    //   )
    // }else{
    //   return (
    //     <div>
    //       <div>Hello Guest</div>
    //     </div>
    //   )

    // }

    //using element variable
    // let message = this.state.isLoggedin ? "Welcome Temesghen" : "Welcome Guest"
    // return (
    //   <div>
    //     <h1>{message}</h1>
    //   </div>
    // )

    // //using ternary conditional operator
    // return(
    //   this.state.isLoggedin ? <h1>Welcome Temesghen</h1> : <h1>Welcome Guest</h1>
    // )

    //using short hand circuit: returns message or blank page
    return(
      this.state.isLoggedin && <h1>Welcome Temesghen</h1>
    )
  }
}

export default ConditionalRendering
