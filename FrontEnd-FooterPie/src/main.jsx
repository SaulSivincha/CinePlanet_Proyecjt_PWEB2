import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer2 from './Footer2p.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer2 />
  </StrictMode>,
)
