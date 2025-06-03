import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderApp from './AppHeader.jsx'
import JumboApp from  "./Jumbo.jsx"
import AppMain from './Appmain.jsx'
import AppFooter from './AppFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderApp />
    <JumboApp />
    <AppMain />
    <AppFooter />
  </StrictMode>,
)
