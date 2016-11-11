import { connect } from 'react-redux'
import React from 'react'
import './HomeView.css'
import homeActions from '../actions/homeActions'
import {Link} from 'react-router'

import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state) => ({
})

const HomeView = ( props ) => (
    <div id="home">
        <h1 > this is the Home view </h1>
        <Link to="detail/user">
            <RaisedButton label="Detail View" />
        </Link>
    </div>
)
HomeView.propTypes = {

}
export default connect(mapStateToProps, homeActions)(HomeView)