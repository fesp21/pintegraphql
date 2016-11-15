import React from 'react'
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import './ImageCard.css'

const ImageCard = ({imageUrl, username, profilePicture, imageDescription}) => (
  <Card className="image_card">
    <CardHeader title={imageDescription} subtitle={username} avatar='http://placehold.it/50x50' />
    <CardMedia>
      <img src={imageUrl} alt="userimg" />
    </CardMedia>
    <CardActions>
      <Link to={`/detail/${username}`} >
        <FlatButton label='Action1' />
      </Link>
    </CardActions>
  </Card>
)
ImageCard.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  profilePicture: React.PropTypes.string,
  imageDescription: React.PropTypes.string
}
export default ImageCard
