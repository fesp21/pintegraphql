import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router'

import './HomeView.css'
import homeActions from '../actions/homeActions'
import ImageCard from '../components/ImageCard/ImageCard'

const mapStateToProps = (state) => ({
})

const HomeView = (props) => (
  <div id='card_block'>
    <ImageCard imageUrl='http://placehold.it/192x118' username="marcosfederic"/>
    <ImageCard imageUrl='http://placehold.it/192x118' username="marcosfederic"/>
    <ImageCard imageUrl='http://placehold.it/192x118' username="marcosfederic"/>
    <ImageCard imageUrl='http://placehold.it/192x118' username="marcosfederic"/>
    <ImageCard imageUrl='http://placehold.it/192x118' username="marcosfederic"/>
    <ImageCard imageUrl='http://placehold.it/192x118' username="marcosfederic"/>
  </div>
)
HomeView.propTypes = {

}
export default connect(mapStateToProps, homeActions)(HomeView)
