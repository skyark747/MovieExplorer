import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import MovieContext from './Context.js'
import MovieList from './MovieList.jsx'
import Footer from './Footer.jsx'
import { useState } from 'react'
import Action from './Movies.js'
import Adventure from './Adventure.js'

const App = () => {
    const [Movies, SetMovies] = useState(Action);
    return (
        <>
        <MovieContext.Provider value={{Movies, SetMovies}}>
            <Navbar />
            <MovieList />
            <Footer />
                
        </MovieContext.Provider >
        </>
    )
}

export default App;
