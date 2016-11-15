import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import 'font-awesome/css/font-awesome.css'

import './TopBar.css'

const TopBar = ({title, github}) => (
    <AppBar
        title={<span style={{cursor: 'pointer'}}>{title}</span>}
        iconElementLeft={<div />}
        iconElementRight={
            <FlatButton
                href={github}
                secondary
                icon={<FontIcon className='fa fa-github' hoverColor='#55486E'/>}
                style={{margin: 12}}
            />
        }
    />
)

TopBar.propTypes = {
   title: React.PropTypes.string.isRequired,
    github: React.PropTypes.string.isRequired
}

export default TopBar