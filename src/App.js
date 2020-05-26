import React from 'react'
// import { Provider } from 'react-redux'
// import store from './store/index'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './style'

// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <GlobalStyle/>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  )
}

export default App
