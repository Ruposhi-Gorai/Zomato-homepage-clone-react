import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'

import HomePage from './Component/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <HomePage />
   
  </>
)
