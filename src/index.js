import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '../src/components/App.jsx'
import { BASENAME } from './constants/basename.js'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASENAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
