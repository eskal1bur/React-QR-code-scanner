import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from "./Layout"

createRoot(document.getElementById('root')).render(
  // <Layout></Layout>,
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
