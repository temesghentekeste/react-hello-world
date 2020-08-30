import React from 'react'

const RefForwarding = React.forwardRef((props, ref) => {
    return (
      <div>
        <br/>
        <input type="text" ref={ref}/>
      </div>
    )
  }
)
export default RefForwarding;
