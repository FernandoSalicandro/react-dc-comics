import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderApp from './AppHeader.jsx'
import AppMain from './Appmain.jsx'
import AppFooter from './AppFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderApp />
    <AppMain />
    <AppFooter />
  </StrictMode>,
)
