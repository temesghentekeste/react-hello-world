import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC'

function FragmentDemo() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

export default FragmentDemo
