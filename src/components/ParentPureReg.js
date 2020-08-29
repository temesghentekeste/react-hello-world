import React, { Component } from 'react'
import PureComponent from './PureComponent'
import RegularComponent from './RegularComponent'
import MemoDemo from './MemoDemo'

class ParentPureReg extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Temesghen'
    }
  }
  
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name: 'Temesghen'
      })
    }, 2000);
    console.log(this.state);
  }

  render() {
    console.log('*****************Parent Component');
    return (
      <div>
        {/* <PureComponent name={this.state.name}/> */}
        {/* <RegularComponent name={this.state.name}/> */}
        <MemoDemo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentPureReg
