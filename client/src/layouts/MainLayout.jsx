import React from 'react'
import { connect } from 'react-redux'

import './MainLayout.css'
import TopBar from '../components/TopBar/TopBar'
import Counter from '../components/Counter/Counter'
import mainActions from '../actions/mainActions'

const mapStateToProps = (state) => ({
    counter : state.mainReducer.counter
})


function MainLayout ({ children, counter, increaseCounter, decreaseCounter }) {
  return (
    <div className='pageContainer'>
      <TopBar
        title="Boilerplate SPA"
        github="https://github.com/marcosfede/react-spa-boilerplate"
      />
      <div className="viewContainer">
        {children}
      </div>
        <Counter counter={counter}
          increaseCounter={increaseCounter} 
          decreaseCounter={decreaseCounter}/>
    </div>
  )
}

MainLayout.propTypes = {
  children: React.PropTypes.element
}

export default connect(mapStateToProps, mainActions)(MainLayout)
