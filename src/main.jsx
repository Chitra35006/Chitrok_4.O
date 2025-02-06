import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './Context/ThemeContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
   <RouterProvider router={router}></RouterProvider>
   </ThemeProvider>

  </StrictMode>,
)
