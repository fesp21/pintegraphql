import React from 'react'
import { connect } from 'react-redux'

import './MainLayout.css'
import TopBar from '../components/TopBar/TopBar'
import mainActions from '../actions/mainActions'

const mapStateToProps = (state) => ({
    counter : state.mainReducer.counter
})


function MainLayout ({ children, counter, increaseCounter, decreaseCounter }) {
  return (
    <div className='pageContainer'>
      <TopBar
        title="PinteGraphQL"
        github="https://github.com/marcosfede/pintegraphql"
      />
      <div className="viewContainer">
        {children}
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: React.PropTypes.element
}

export default connect(mapStateToProps, mainActions)(MainLayout)
