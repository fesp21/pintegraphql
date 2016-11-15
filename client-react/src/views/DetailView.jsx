import { connect } from 'react-redux'
import React from 'react'
import './DetailView.css'
import detailActions from '../actions/detailActions'
import { Link } from 'react-router'

import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = (state) => ({
})


const HomeView = ( props ) => (
    <div id="detail">
        <h1 > this is the Detail view </h1>
        <Link to="/">
            <RaisedButton label="Home view" />
        </Link>
    </div>
)
HomeView.propTypes = {

}
export default connect(mapStateToProps, detailActions)(HomeView)