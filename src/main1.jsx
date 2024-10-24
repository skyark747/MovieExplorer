import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Movie from './Movie.jsx'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Navbar />
        <Footer />
    </>
)
