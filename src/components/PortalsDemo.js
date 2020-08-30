import React from 'react'
import ReactDOM from 'react-dom'

function PortalsDemo() {
  return ReactDOM.createPortal(
    <h1>
      Portals Demo
    </h1>, 
    document.getElementById('portals-root'))
  
}

export default PortalsDemo;
