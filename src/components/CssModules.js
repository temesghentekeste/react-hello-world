import React from 'react'
import styles from './appStyles.module.css'

function CssModules() {
  return (
    <div>
      <p className={styles.primary}>Some success message</p>
      <p className={styles.danger}>Some danger message</p>
    </div>
  )
}

export default CssModules
