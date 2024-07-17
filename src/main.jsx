import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScreenRecorderProvider } from './lib/screenRecorder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenRecorderProvider>
      <App />
    </ScreenRecorderProvider>
  </React.StrictMode>,
)
