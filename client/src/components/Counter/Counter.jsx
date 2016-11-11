import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Counter = ({counter, increaseCounter, decreaseCounter}) => (
    <div style={{display: 'flex', flexDirection: 'row', marginTop: '30px'}}>
       <FlatButton label="-" onClick={() => decreaseCounter()}/>
        <span style={{display: 'flex', alignItems: 'center'}}>{counter}</span>
        <FlatButton label="+" onClick={() => increaseCounter()}/>
    </div>
)
export default Counter
