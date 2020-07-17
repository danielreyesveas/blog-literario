import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

const Spinner = () => {
  const circles = [...Array(3)].map((_, index) => <div key={index} style={{ background: '#a161bf'}}></div>)

  return (
        <div className={classNames(styles['spinner-container'])} >
            <div className={classNames(styles['lds-facebook'])}>
                {circles}
            </div>
        </div>
  )
}
export default Spinner