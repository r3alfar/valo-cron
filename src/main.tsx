import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MyNavbar from './components/navbar/MyNavbar.tsx'
import { ThemeProvider } from './components/theme-provider/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <MyNavbar /> */}
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
)
