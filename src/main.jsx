import { createRoot } from 'react-dom/client'
import './assets/style/css/custom.css'
import './assets/style/css/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
