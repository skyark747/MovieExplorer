import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import MovieContext from './Context.js'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
