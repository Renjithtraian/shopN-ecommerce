import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import AppContextWrapper from './components/Context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AppContextWrapper>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  // </AppContextWrapper>
)
