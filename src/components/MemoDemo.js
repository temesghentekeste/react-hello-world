import React from 'react'

function MemoDemo(props) {
  console.log('Memo component: render')
  return (
    <div>
      Rendering Memo Coponent:: {props.name}
    </div>
  )
}

export default React.memo(MemoDemo)
