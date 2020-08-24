import React from 'react'

function IndexAsAKey() {
  const names = ['Temesghen', 'Biniam', 'Yonathan', 'Debora']
const namesList = names.map( (name, index) => <h1 key={index}>{ `${index+1}. ${name}`}</h1>)
  return (
    <div>
      {namesList}
    </div>
  )
}

export default IndexAsAKey
