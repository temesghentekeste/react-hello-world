import React from 'react'

function ListRendering() {
  const students = [
    { id: 1, name: 'biniam'}, 
    { id: 2, name: 'temsghen'},
    { id: 3, name: 'yemane'},
    { id: 4, name: 'debas'},
    { id: 5, name: 'mulugeta'}
  ]
  return (
    <div>
      {
        students.map( student => <h1 key={student.id}>{student.name}</h1>)
      }
    </div>
  )
}

export default ListRendering
