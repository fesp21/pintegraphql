import { connect } from 'react-redux'
import React from 'react'
import './AboutView.css'
import aboutActions from '../actions/aboutActions'
import { Link } from 'react-router'
const mapStateToProps = (state) => ({
})


const HomeView = ( props ) => (
    <div>
        <h1 > this is the About view </h1>
        <Link to="/">Home view</Link>
    </div>
)
HomeView.propTypes = {

}
export default connect(mapStateToProps, aboutActions)(HomeView)