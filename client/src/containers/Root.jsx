import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: '#01579B',
        primary1Color: '#55486E',
        textColor: '#424242'
    }
})

const App = ({store, routes, history}) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    </MuiThemeProvider>
)
App.propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
}
export default App;