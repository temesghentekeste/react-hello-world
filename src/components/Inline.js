import React from 'react'

function Inline() {
  const paragraph = {
    fontSize: '5rem',
    textTransform: 'capitalize'
  }
  return (
    <div>
      <h2 style={paragraph}> this is some heading</h2>
    </div>
  )
}

export default Inline
