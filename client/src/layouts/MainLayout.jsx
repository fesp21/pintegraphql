import React from 'react'
import './MainLayout.css'

function CoreLayout ({ children }) {
  return (
    <div className='pageContainer'>
      {children}
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
}

export default CoreLayout
