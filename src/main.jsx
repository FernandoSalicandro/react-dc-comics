import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppHeader from "../Components/AppHeader.jsx"
import AppJumbo from "../Components/AppJumbo.jsx"
import AppMain from  "../Components/AppMain.jsx"
import AppFooter from "../Components/AppFooter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHeader />
    <AppJumbo />
    <AppMain />
    <AppFooter />

  </StrictMode>,
)
