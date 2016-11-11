import { connect } from 'react-redux'
import React from 'react'
import './HomeView.css'
import homeActions from '../actions/homeActions'
import {Link} from 'react-router'
const mapStateToProps = (state) => ({
})


const HomeView = ( props ) => (
    <div>
        <h1 > this is the Home view </h1>
        <Link to="about">About view</Link>
    </div>
)
HomeView.propTypes = {

}
export default connect(mapStateToProps, homeActions)(HomeView)