import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Modo estricto que ayuda a verificar posibles problemas
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
