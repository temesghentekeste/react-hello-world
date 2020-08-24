import React from 'react'

// export const Hello = () => <h1>Hello Temesghen</h1>;
const Hello = (props) => {
  const {name, title} = props
  return (
  <div>
    <h1>Hello {name}, you are {title} </h1>
    {props.children}
  </div> 
  )
}

export default Hello;
