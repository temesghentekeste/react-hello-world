import React from 'react'
import Student from './Student'

function ListRendering() {
  const students = [
    { 
      id: 1, 
      name: 'biniam',
      age: 28,
      skill: 'react'
    }, 
    { 
      id: 2, 
      name: 'temsghen',
      age: 27,
      skill: 'vue'
    },
    { 
      id: 3, 
      name: 'yemane',
      age: 28,
      skill: 'angular'
    },
    { 
      id: 4, 
      name: 'debas',
      age: 29,
      skill: 'node'
    },
    { 
      id: 5, 
      name: 'mulugeta',
      age: 28,
      skill: 'deno'
    }
  ]
  return (
    <div>
      {
        students.map( student => <Student  key={student.id} student={student}/> )
      }
    </div>
  )
}

export default ListRendering
