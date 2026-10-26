import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import tema from '../src/tema.js'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <ThemeProvider theme={tema} defaultMode="system">
      <CssBaseline />
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
