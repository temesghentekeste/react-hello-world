import React from 'react'

export default function Child(props) {
  return (
    <div>
      <button onClick={()=>props.clickHandler('Hello from child')}>Greet parent</button>
    </div>
  )
}
