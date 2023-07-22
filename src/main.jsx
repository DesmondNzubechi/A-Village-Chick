import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NewsContext } from './Components/Context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContext>
    <App />
    </NewsContext>
  </React.StrictMode>,
)
