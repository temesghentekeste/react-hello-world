import React from 'react'

const withCounter = (WrappedComponent, incrementValue) => {
  class WithCounter extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
  
    }
    
    incrementCount = () => {
      this.setState(prev => {
        return {count: prev.count + incrementValue}
      })
    }

    render() {
      return <WrappedComponent 
              count={this.state.count} 
              incrementCount = {this.incrementCount}
              {...this.props}
              />
    }
  }
  return WithCounter;
}

export default withCounter;