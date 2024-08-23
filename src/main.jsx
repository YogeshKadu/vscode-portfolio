import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SpotifyContextProvider from './context/SpotifyContextProvider.jsx'
import HistoryContextProvider from './context/HistoryContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SpotifyContextProvider>
      <HistoryContextProvider>
        <App />
      </HistoryContextProvider>
    </SpotifyContextProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
