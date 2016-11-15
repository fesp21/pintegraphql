import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import storeDefaults from './store/storeDefaults'
import Root from './containers/Root'
import routes from './routes/routes'

const store = configureStore(storeDefaults)
injectTapEventPlugin()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('root')
)
