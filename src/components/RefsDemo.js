import React, { Component } from 'react'

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    
    this.myRef = React.createRef();
    //just to see an alternative of event of binding
    this.readTextInput = this.readTextInput.bind(this);

    //callback refs
    this.cbRef = null;
    this.setCbRef = element => this.cbRef = element;
  }
  
  topMargin = {
    marginTop: "1rem"
  }

  focusTextInput = e => {
    // this.myRef.current.focus();
    if(this.cbRef){
      this.cbRef.focus();
    }
  }

  readTextInput(){
    alert(this.myRef.current.value);
  }

 
 render() {
    return (
      <div style={this.topMargin}>
        <input style={this.topMargin} type="text" ref={this.myRef}/><br/>

        <input style={this.topMargin} type="text" ref={this.setCbRef}/>

        <input 
          style={this.topMargin}
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <input 
        style={this.topMargin}
         type="button"
        value="Read text"
        onClick={this.readTextInput}
        />
      </div>
    )
  }
}

export default RefsDemo
