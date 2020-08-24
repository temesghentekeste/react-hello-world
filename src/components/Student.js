import React from 'react'

function Student({student}) {
  return (
    <div>
      <h1>{student.name}</h1>
      <p>{`Skill: ${student.skill}`}</p>
      <p>{`Age: ${student.age}`}</p>
    </div>
  )
}

export default Student
